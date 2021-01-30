//<====== TABLES ========================================================================================================================>
    const PJSCGenerateTable = payload => {   
        let table = '';
        let columns = '';
        let rows = '';
        //Prepare payload data to generate columns name and rows
            //columns name
            columns += payload.columnsMask.map((colName,pos) => `<th data-pjsc-table-column-filter="${pos}">${colName.column}</th>`).join('');
            //rows
            rows += payload.rows.map(row => `<tr data-pjsc-table-row-id="${row.id}">${payload.columnsMask.map(camp => {
                                                    if(camp.type == 'imgProfile'){
                                                        return`<td class="d-flex align-items-center border-top-0"><img class="profile-img img-sm img-rounded mr-2" src="${row[camp.jsonKey[1]]}">${row[camp.jsonKey[0]]}</td>`;
                                                    }else if(camp.type == 'img') {
                                                        return `<td class="d-flex align-items-center border-top-0"><img class="profile-img img-sm img-rounded mr-2" src="${row[camp.jsonKey[0]]}"></td>`;
                                                    }else if(camp.type == 'tags') {
                                                        return `<td>${row[camp.jsonKey].map(tag => {return `<label class="badge badge-${tag.color} mx-1">${tag.name}</label>`;}).join(' ')}</td>`;
                                                    }else{
                                                        return `<td>${camp.jsonKey.map(index => row[index]).join('')}</td>`;
                                                    }
                                                }).join('')
                                            }<tr>`
                                        ).join('');
        //Generate table html struct
            //Open tag table
            table = '<table class="table table-hover">';
                //Append column names (header)
                table += `<thead><tr>${columns}</tr></thead>`;
                //Append rows (body)
                table += `<tbody>${rows}</tbody>`;

            //Close tag table
            table+= '</table>';
        
        console.log('[PJSC] Appending table to the component ...');
        return table;
    }
//<====== TABLE FILTERS =============================================================================================================>
    //-> sample text
    const PJSCFilterTableBySampleText = (containerId,sampleText,rerendertableCallback = () => {}) => {
        //Regenerate table
        rerendertableCallback();
        
        //Convert sampleText to lowercase and escape all special char
        sampleText = sampleText.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        //Get container element by id and get the first children element (=> table)
        let container = document.querySelector(containerId);
        let tableToFilter = container.childNodes[0];

        //Search sample text on each table row
        if(sampleText.replace(/\s/g, '').length != 0){
            Object.values(tableToFilter.rows).map((row,pos) => {
                if(pos % 2 != 0){
                    if(row.innerHTML.toLowerCase().search(sampleText) == -1){
                        row.innerHTML = '';
                    }
                }   
            });
        } 
    }

    //-> columns order by alphabetic order
    const PJSCOrderTableColumns = (th,appendRowEventListener = () => {},rerendertableCallback = () => {}) => {
        let table = th.parentNode.parentNode.parentNode;
        let tableRowsInfo = [];
        let sortedRowCol = [];
        //Generate rows content
        Object.values(table.rows).map((row,pos) => {
            if(pos % 2 != 0){
                tableRowsInfo.push({element:row.innerHTML,content:Object.values(row.children).map(td => {return td.innerHTML.replace(/<(.|\n)*?>/g, '')})});
            }
        });

        tableRowsInfo.map((row,rpos)=> row.content.map((content,cpos) => { 
                if(th.dataset.pjscTableColumnFilter == cpos){
                    sortedRowCol.push({"content":content,"pos":rpos});
                } 
            } 
        ))

        //Sort row column content
        sortedRowCol.sort((a, b) => {
            if (a.content.toLowerCase() < b.content.toLowerCase()){
                return -1;
            }
            if (a.content.toLowerCase() > b.content.toLowerCase()){
                return 1;
            }
            return 0;
        });
        //Rearrange table rows (sort table)
        table.children[1].innerHTML = ''; sortedRowCol.map(ele => {table.children[1].innerHTML+=tableRowsInfo[ele.pos].element});
        
        if(localStorage.getItem('pjsc-rerendertable-order-table-column') == undefined){
            localStorage.setItem('pjsc-rerendertable-order-table-column','true');
        }
        
        if(localStorage.getItem('pjsc-rerendertable-order-table-column') == 'true'){
            rerendertableCallback();
            localStorage.setItem('pjsc-rerendertable-order-table-column','false');
        }else if(localStorage.getItem('pjsc-rerendertable-order-table-column') == 'false'){
            console.log(appendRowEventListener)
            appendRowEventListener();
            localStorage.setItem('pjsc-rerendertable-order-table-column','true');
        }
    }

//<===== APPEND TABLE TO A GIVEN CONTAINER =========================================================================================>
    const PJSCAppendTableToContainer = (containerId,payload,appendRowEventListener = () => {}) => {
        //Prevent undefined elementId passed to function
        let container = document.querySelector(containerId);
        try{
            if(container == null)
                throw 'Unknown containerId passed to function PJSCAppendTableToContainer() 😵';
        }catch(e){
            console.error(e);
        }
        //Append table to container
        container.innerHTML = PJSCGenerateTable(payload);

        //Append event list to trigger a function when click on a row (event listener for each table row)
        appendRowEventListener();

        //Append event list to trigger a sort by thead (detect if user wants to trigger reorder of table by a certain column name)
        Object.values(container.children[0].children[0].children[0].children).map(tr => {tr.style.cursor = 'pointer'; tr.addEventListener('click',function(){ PJSCOrderTableColumns(this,appendRowEventListener,PJSCAppendTableToContainer(containerId,payload,appendRowEventListener))}) });
    
        console.log('[PJSC] Table been appended successfully 🚀');
    }

//<===== APPEND EVENT LISTENER =====================================================================================================>
    const PJSCAddEventListenerToFilterInput = (elementId,eventListenerType,payload,reappendEventListener = () => {}) => {
        let element = document.querySelector(elementId);
        //Prevent undefined elementId passed to function
        try{
            if(element == null)
                throw 'Unknown containerId passed to function PJSCAppendTableToContainer() 😵';
        }catch(e){
            console.error(`[PJSC] ${e}`);
        }
        //Add event
        element.addEventListener(eventListenerType,function(){
            //Try to get element.dataset.pjscApplyFilterToTableContainerId, if not found or have a unknow value, throw error
            try{
                if(!element.hasAttribute('data-pjsc-apply-filter-to-table-container-id')){
                    throw 'Error to get dataset.pjscApplyFilterToTableContainerId, define data-pjsc-apply-filter-to-table-container-id attr to element, values accepted [needs to be the table container id]';
                }
            }catch(e){
                console.error(`[PJSC] ${e}`);
            }

            //Try to get element.dataset.pjscApplyFilterType, if not found or have a unknow value, throw error
            try{
                if(element.dataset.pjscApplyFilterType == 'sample-text'){
                    PJSCFilterTableBySampleText(`#${this.dataset.pjscApplyFilterToTableContainerId}`,this.value,() =>{ PJSCAppendTableToContainer(`#${this.dataset.pjscApplyFilterToTableContainerId}`,payload,reappendEventListener)});
                }else if(element.hasAttribute('data-pjsc-apply-filter-type')){
                    throw 'Error to get dataset.pjscApplyFilterType, define data-pjsc-apply-filter-type attr to element, values accepted [sample-text] 😨';
                }else{
                    throw 'Unknown data-pjsc-apply-filter-type attr value, values accepted [sample-text] 😵';
                }
            }catch(e){
                console.error(`[PJSC] ${e}`);
            }
        })
    }

    //-> tables
    const PJSCAddEventListenerToTable = (containerId,pathOfChildrenToAppendListener,eventListenerType,executeFunction) => {
        let container = document.querySelector(containerId);
        //Prevent undefined elementId passed to function
        try{
            if(container == null){
                throw 'Unknown containerId passed to function PJSCAddEventListenerToTable() 😵';
            }
        }catch(e){
            console.error(`[PJSC] ${e}`);
        }
        //Create element children tree using split method on > char
        let treeChildren = pathOfChildrenToAppendListener.toUpperCase().split('>');
        
        //Iterate the container to search for the last item of treeChildren
        let pjsElementIterator = PJSCAddEventListenerToTableHelper(container,treeChildren[0],0);
        while(pjsElementIterator.proceed && pjsElementIterator.count != treeChildren.length - 1){
            pjsElementIterator = PJSCAddEventListenerToTableHelper(pjsElementIterator.element,treeChildren[pjsElementIterator.count+1],pjsElementIterator.count+1);
            Object.values(pjsElementIterator.element.childNodes).map((element,pos) => {
                if(pos % 2 == 0){
                    element.addEventListener(eventListenerType,() => executeFunction());
                    element.style.cursor = 'pointer';
                }
            });
        }
    }

    const PJSCAddEventListenerToTableHelper = (element,tagName,count) => {
        let output = {
            "proceed":0,
            "element":"",
            "count":""
        };
        Object.values(element.children).map((ele) => {
            if(ele.tagName == tagName)
                output = {
                    "proceed":1,
                    "element":ele,
                    "count":count
                };
        });
        return output;
    }




