//Append struct

PJSCAppendCategoryToContainer({
    header:{
        title:'Criar uma nova categoria/sub categoria de multimédia',
        button:{
            title:'Voltar atrás',
            classCTA:'something'
        }
    },
    category:{
        form:{
            create:{
                title:'Categoria',
                id:'form-multimedia-category-create',
                submitStatus:{
                    error:'form-multimedia-category-create-submit-status-error',
                    success:'form-multimedia-category-create-submit-status-success'
                }
            }
        },
        table:'listing-table-categories'
    },
    subCategory:{
        form:{
            create:{
                title:'Sub categoria',
                id:'form-multimedia-sub-category-create',
                submitStatus:{
                    error:'form-multimedia-sub-category-create-submit-status-error',
                    success:'form-multimedia-sub-category-create-submit-status-success'
                }
            }
        },
        table:'listing-table-sub-categories'
    }
})


//Data
    //-> Categories
    let dataCategories = [
        {
            id:1,
            title:'Bem-estar',
            fileName:'https://source.unsplash.com/random',
            regst_ini:'24-23-1234',
            owner:'Marco Porto',
            status:'public'
        },
        {
            id:2,
            title:'Ginástica',
            fileName:'https://source.unsplash.com/random',
            regst_ini:'24-13-1234',
            owner:'Marco Porto',
            status:'public'
        },
        {
            id:3,
            title:'Karaoke',
            fileName:'https://source.unsplash.com/random',
            regst_ini:'24-23-3421',
            owner:'Marco Porto',
            status:'public'
        },
        {
            id:4,
            title:'Ouvir música',
            fileName:'https://source.unsplash.com/random',
            regst_ini:'24-23-1234',
            owner:'Marco Porto',
            status:'public'
        },
        {
            id:5,
            title:'Receitas de culinária',
            fileName:'https://source.unsplash.com/random',
            regst_ini:'34-23-1234',
            owner:'Marco Porto',
            status:'public'
        },
        {
            id:6,
            title:'Religião',
            fileName:'https://source.unsplash.com/random',
            regst_ini:'24-56-1234',
            owner:'Marco Porto',
            status:'public'
        },
        {
            id:7,
            title:'Trabalhos manuais',
            fileName:'https://source.unsplash.com/random',
            regst_ini:'66-23-4533',
            owner:'Marco Porto',
            status:'public'
        }
    ];

    //-> Sub categories
    let dataSubCategories = [
        {
            id:1,
            category:'Ginástica',
            title:'Membros superiores',
            fileName:'https://source.unsplash.com/random',
            regst_ini:'24-13-1234',
            owner:'Marco Porto',
            status:'public'
        },
        {
            id:2,
            category:'Ginástica',
            title:'Relaxamento',
            fileName:'https://source.unsplash.com/random',
            regst_ini:'24-13-1234',
            owner:'Marco Porto',
            status:'public'
        },
        {
            id:3,
            category:'Karaoke',
            title:'Pedro Abrunhosa - Karaoke',
            fileName:'https://source.unsplash.com/random',
            regst_ini:'24-23-3421',
            owner:'Marco Porto',
            status:'public'
        }
    ]



    //Tables
        //-> Category
            let payloadForTableCategories = {
                columnsMask:[
                {
                    column:'#',
                    jsonKey:['id'],
                    type:'text'
                },
                {
                    column:'Titulo',
                    jsonKey:['title','fileName'],
                    type:'imgProfile'
                },
                {
                    column:'Estado',
                    jsonKey:['status'],
                    type:'text'
                },
                {
                    column:'Adicionada a',
                    jsonKey:['regst_ini'],
                    type:'text'
                },
                {
                    column:'Adicionado por',
                    jsonKey:['owner'],
                    type:'text'
                }
                ],
                rows:dataCategories
            }

            //Append add event listener to detect a row click and call GenerateUpdateForm()
            const appendRowEventListenerCategories = () => PJSCAddEventListenerToTable('#listing-table-categories','table>tbody','click',function(){
                //GenerateUpdateForm(this.event.toElement.parentNode.dataset.pjscTableRowId)
                console.log(this.event.toElement.parentNode.dataset.pjscTableRowId)
            })

            //Append table to container #utentes-table
            PJSCAppendTableToContainer('#listing-table-categories',payloadForTableCategories,appendRowEventListenerCategories);

            //Append event listener (keyup) to filter input #utentes-table-filter
            PJSCAddEventListenerToFilterInput('#listing-table-categories-filter','keyup',payloadForTableCategories,appendRowEventListenerCategories);
        
        //-> Sub category
        let payloadForTableSubCategories = {
            columnsMask:[
            {
                column:'#',
                jsonKey:['id'],
                type:'text'
            },
            {
                column:'Titulo',
                jsonKey:['title','fileName'],
                type:'imgProfile'
            },
            {
                column:'Categoria',
                jsonKey:['category'],
                type:'text'
            },
            {
                column:'Estado',
                jsonKey:['status'],
                type:'text'
            },
            {
                column:'Adicionada a',
                jsonKey:['regst_ini'],
                type:'text'
            },
            {
                column:'Adicionado por',
                jsonKey:['owner'],
                type:'text'
            }
            ],
            rows:dataSubCategories
        }

        //Append add event listener to detect a row click and call GenerateUpdateForm()
        const appendRowEventListenerSubCategories = () => PJSCAddEventListenerToTable('#listing-table-sub-categories','table>tbody','click',function(){
            //GenerateUpdateForm(this.event.toElement.parentNode.dataset.pjscTableRowId)
            console.log(this.event.toElement.parentNode.dataset.pjscTableRowId)
        })

        //Append table to container #utentes-table
        PJSCAppendTableToContainer('#listing-table-sub-categories',payloadForTableSubCategories,appendRowEventListenerSubCategories);

        //Append event listener (keyup) to filter input #utentes-table-filter
        PJSCAddEventListenerToFilterInput('#listing-table-sub-categories-filter','keyup',payloadForTableSubCategories,appendRowEventListenerSubCategories);







