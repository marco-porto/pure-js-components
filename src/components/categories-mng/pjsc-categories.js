//Generate components
    //-> Header
    const PJSCCategoriesFormHeader = props => {
        return `<div class="col-12 equel-grid">
            <div class="grid">
                <div class="grid-body">
                    <div class="split-header">
                        <p class="card-title">${props.title}</p>
                        <button type="button" class="btn btn-primary ${props.button.classCTA}">${props.button.title}</button>
                    </div>
                </div>
            </div>
        </div>`
    }
    //-> Category
        //-> Form
            //-> Create
            const PJSCCategoryFormCreate = props => {
                let randomId = [PJSCRandomizeString(20),PJSCRandomizeString(20)];
                return `<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 equel-grid">
                            <div class="grid">
                                <div class="grid-body">
                                    <div class="split-header">
                                        <p class="card-title">${props.title}</p>
                                    </div>
                                    <div class="item-wrapper pt-5">
                                        <form id="${props.id}" data-submit-route="${props.submit.route}">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <label for="${randomId[0]}">Nome da categoria</label>
                                                        <span class="btn action-btn btn-xs component-flat float-right" data-toggle="tooltip" data-placement="left" title="Aceita só caracteres de A-Z,números,espaços e (-).">
                                                            <i class="mdi mdi-information-outline text-muted mdi-2x"></i>
                                                        </span>
                                                        <input type="text" class="form-control" id="${randomId[0]}" name="title" placeholder="">
                                                    </div>
                                                </div>
                
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <label for="${randomId[1]}">Imagem da sub categoria</label>
                                                        <span class="btn action-btn btn-xs component-flat float-right" data-toggle="tooltip" data-placement="left" title="Aceita só caracteres de A-Z,números,espaços e (-).">
                                                            <i class="mdi mdi-information-outline text-muted mdi-2x"></i>
                                                        </span>
                                                        <input type="text" class="form-control" id="${randomId[1]}" name="title" placeholder="">
                                                    </div>
                                                </div>
                
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <div class="btn-group mb-0 d-flex flex-column" data-toggle="buttons">
                                                            <div> 
                                                                <label>Estado da categoria</label> 
                                                            </div>
                                                            <div>
                                                                <label class="btn btn-outline-primary btn-xs active">
                                                                    <input type="radio" name="status" value="public" checked="">
                                                                    <i class="mdi mdi-eye px-2"></i> Público
                                                                </label>
                                                                <label class="btn btn-outline-primary btn-xs">
                                                                    <input type="radio" name="status" value="private">
                                                                    <i class="mdi mdi-eye-off px-2"></i> Privado
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="py-3">
                                                <p class="small text-danger" id="${props.submit.status.error}"></p>
                                                <p class="small text-success" id="${props.submit.status.success}"></p>
                                            </div>

                                            <div class="d-flex flex-row">
                                                <div>
                                                    <button id="${props.submit.buttons.active}" type="submit" class="btn btn-sm btn-primary">Adicionar</button>
                                                    <button id="${props.submit.buttons.loading}" class="btn btn-sm btn-primary" type="button" disabled="">
                                                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                        <span class="sr-only">Loading...</span>
                                                    </button>
                                                </div>
                                                <div class="ml-auto">
                                                    <button type="reset" id="${props.submit.buttons.cancel}" class="btn btn-inverse-primary">Cancelar</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>`;
            }
            //-> Update
            
        //-> Table
        const PJSCCategoryTable = tableContainerId => {
            return `<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 equel-grid">
                        <div class="grid p-2">
                            <div class="grid-body py-3">
                                <input type="text" class="form-control" placeholder="Pesquisar" id="${tableContainerId}-filter" data-pjsc-apply-filter-type='sample-text' data-pjsc-apply-filter-to-table-container-id="${tableContainerId}">
                            </div>
                            <div class="table-responsive" id="${tableContainerId}"></div>
                        </div>
                    </div>`
        }

    //-> Sub category
        //-> Form
            //-> Create
            const PJSCSubCategoryFormCreate = props => {
                let randomId = [PJSCRandomizeString(20),PJSCRandomizeString(20)]
                return `<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 equel-grid">
                            <div class="grid">
                                <div class="grid-body">
                                    <div class="split-header">
                                        <p class="card-title">${props.title}</p>
                                    </div>
                                    <div class="item-wrapper pt-5">
                                        <form id="${props.id}"  data-submit-route="${props.submit.route}">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <label for="${randomId[0]}">Nome da sub categoria</label>
                                                        <span class="btn action-btn btn-xs component-flat float-right" data-toggle="tooltip" data-placement="left" title="Aceita só caracteres de A-Z,números,espaços e (-).">
                                                            <i class="mdi mdi-information-outline text-muted mdi-2x"></i>
                                                        </span>
                                                        <input type="text" class="form-control" id="${randomId[0]}" name="title" placeholder="">
                                                    </div>
                                                </div>
                
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <label for="${randomId[1]}">Imagem da sub categoria</label>
                                                        <span class="btn action-btn btn-xs component-flat float-right" data-toggle="tooltip" data-placement="left" title="Aceita só caracteres de A-Z,números,espaços e (-).">
                                                            <i class="mdi mdi-information-outline text-muted mdi-2x"></i>
                                                        </span>
                                                        <input type="text" class="form-control" id="${randomId[1]}" name="title" placeholder="">
                                                    </div>
                                                </div>

                                                <div class="col-12">
                                                    <div class="form-group" id="container-select-categories-on-sub-category-form-input"></div>
                                                </div>
                
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <div class="btn-group mb-0 d-flex flex-column" data-toggle="buttons">
                                                            <div> 
                                                                <label>Estado do sub categoria</label> 
                                                            </div>
                                                            <div>
                                                                <label class="btn btn-outline-primary btn-xs active">
                                                                    <input type="radio" name="status" value="public" checked="">
                                                                    <i class="mdi mdi-eye px-2"></i> Público
                                                                </label>
                                                                <label class="btn btn-outline-primary btn-xs">
                                                                    <input type="radio" name="status" value="private">
                                                                    <i class="mdi mdi-eye-off px-2"></i> Privado
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="py-3">
                                                <p class="small text-danger" id="${props.submit.status.error}"></p>
                                                <p class="small text-success" id="${props.submit.status.success}"></p>
                                            </div>

                                            <div class="d-flex flex-row">
                                                <div>
                                                    <button id="${props.submit.buttons.active}" type="submit" class="btn btn-sm btn-primary">Adicionar</button>
                                                    <button id="${props.submit.buttons.loading}" class="btn btn-sm btn-primary" type="button" disabled="">
                                                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                        <span class="sr-only">Loading...</span>
                                                    </button>
                                                </div>
                                                <div class="ml-auto">
                                                    <button type="reset" id="${props.submit.buttons.cancel}" class="btn btn-inverse-primary">Cancelar</button>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>`
            }
            //-> Update
            
        //-> Table
        const PJSCSubCategoryTable = tableContainerId => {
            return `<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 equel-grid">
                        <div class="grid p-2">
                            <div class="grid-body py-3">
                                <input type="text" class="form-control" placeholder="Pesquisar" id="${tableContainerId}-filter" data-pjsc-apply-filter-type='sample-text' data-pjsc-apply-filter-to-table-container-id="${tableContainerId}">
                            </div>
                            <div class="table-responsive" id="${tableContainerId}"></div>
                        </div>
                    </div>`
        }

//Append to container
const PJSCAppendCategoryToContainer = props => {
    //console.log(props)

    let components = {
        header:PJSCCategoriesFormHeader(props.header),
        category:{
            forms:{
                create:PJSCCategoryFormCreate(props.category.form.create),
                update:''
            },
            table:PJSCSubCategoryTable(props.category.table)
        },
        subCategory:{
            forms:{
                create:PJSCSubCategoryFormCreate(props.subCategory.form.create),
                update:''
            },
            table:PJSCSubCategoryTable(props.subCategory.table)
        }
    }

    //Append components to container
    if(props.container instanceof Element){
        props.container.innerHTML += components.header;

        props.container.innerHTML += components.category.forms.create;
        props.container.innerHTML += components.subCategory.forms.create;

        props.container.innerHTML += components.category.forms.update;
        props.container.innerHTML += components.subCategory.forms.update;

        props.container.innerHTML += components.category.table;
        props.container.innerHTML += components.subCategory.table;
    }else{
        document.querySelector(props.container).innerHTML += components.header;

        document.querySelector(props.container).innerHTML += components.category.forms.create;
        document.querySelector(props.container).innerHTML += components.subCategory.forms.create;
        
        document.querySelector(props.container).innerHTML += components.category.forms.update;
        document.querySelector(props.container).innerHTML += components.subCategory.forms.update;

        document.querySelector(props.container).innerHTML += components.category.table;        
        document.querySelector(props.container).innerHTML += components.subCategory.table;
    }

    //Set form submit handlers
    document.querySelector(`#${props.category.form.create.id}`).addEventListener('submit',event => PJSCCategorySubmitFormHandler({
        event:event,
        buttons:props.category.form.create.submit.buttons,
        status:props.category.form.create.submit.status
    }))
    document.querySelector(`#${props.subCategory.form.create.id}`).addEventListener('submit',event => PJSCCategorySubmitFormHandler({
        event:event,
        buttons:props.subCategory.form.create.submit.buttons,
        status:props.subCategory.form.create.submit.status
    }))

    //Append select categories
    PJSCAppendSelectToContainer(props.subCategory.form.selectCategoriesInput);

    //Define submit button state - active
        //-> Category
        PJSCSubmitButtonState({
            loading:false,
            button:{
                active:document.querySelector(`#${props.category.form.create.submit.buttons.active}`),
                loading:document.querySelector(`#${props.category.form.create.submit.buttons.loading}`),
            }
        });

        //-> Sub category
        PJSCSubmitButtonState({
            loading:false,
            button:{
                active:document.querySelector(`#${props.subCategory.form.create.submit.buttons.active}`),
                loading:document.querySelector(`#${props.subCategory.form.create.submit.buttons.loading}`),
            }
        });
}

//Submit forms handlers
const PJSCCategorySubmitFormHandler = async props => {
    props.event.preventDefault();

    //Define submit button state - loading
    PJSCSubmitButtonState({
        loading:true,
        button:{
            active:document.querySelector(`#${props.buttons.active}`),
            loading:document.querySelector(`#${props.buttons.loading}`),
        }
    });

    console.log('SUBMIT TO:',props.event.target.dataset.submitRoute)

    await fetch(props.event.target.dataset.submitRoute)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.error('Error:',error))
    
    
}