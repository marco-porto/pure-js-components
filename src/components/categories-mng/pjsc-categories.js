//Generate components
    //-> Header
    const PJSCCategoriesFormHeader = props => {
        return `<div class="col-12 equel-grid">
            <div class="grid">
                <div class="grid-body">
                    <div class="split-header">
                        <p class="card-title">${props.header.title}</p>
                        <button type="button" class="btn btn-primary ${props.header.button.classCTA}">${props.header.button.title}</button>
                    </div>
                </div>
            </div>
        </div>`
    }
    //-> Category
        //-> Form
            //-> Create
            const PJSCCategoryFormCreate = props => {
                let randomId = [PJSCRandomizeString(8),PJSCRandomizeString(8),PJSCRandomizeString(8)]
                return `<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 equel-grid">
                            <div class="grid">
                                <div class="grid-body">
                                    <div class="split-header">
                                        <p class="card-title">${props.title}</p>
                                    </div>
                                    <div class="item-wrapper pt-5">
                                        <form  id="${props.form.id}">
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
                                                                    <input type="radio" name="status" id="${randomId[2]}" value="public" checked="">
                                                                    <i class="mdi mdi-eye px-2"></i> Público
                                                                </label>
                                                                <label class="btn btn-outline-primary btn-xs">
                                                                    <input type="radio" name="status" value="private" id="${randomId[2]}">
                                                                    <i class="mdi mdi-eye-off px-2"></i> Privado
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="py-3">
                                                <p class="small text-danger" id="${props.form.submitStatus.id.error}"></p>
                                                <p class="small text-success" id="${props.form.submitStatus.id.sucess}"></p>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>`
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
                let randomId = [PJSCRandomizeString(8),PJSCRandomizeString(8),PJSCRandomizeString(8)]
                return `<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 equel-grid">
                            <div class="grid">
                                <div class="grid-body">
                                    <div class="split-header">
                                        <p class="card-title">${props.title}</p>
                                    </div>
                                    <div class="item-wrapper pt-5">
                                        <form  id="${props.form.id}">
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
                                                    <div class="form-group">
                                                        <div class="btn-group mb-0 d-flex flex-column" data-toggle="buttons">
                                                            <div> 
                                                                <label>Estado do sub categoria</label> 
                                                            </div>
                                                            <div>
                                                                <label class="btn btn-outline-primary btn-xs active">
                                                                    <input type="radio" name="status" id="${randomId[2]}" value="public" checked="">
                                                                    <i class="mdi mdi-eye px-2"></i> Público
                                                                </label>
                                                                <label class="btn btn-outline-primary btn-xs">
                                                                    <input type="radio" name="status" value="private" id="${randomId[2]}">
                                                                    <i class="mdi mdi-eye-off px-2"></i> Privado
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="py-3">
                                                <p class="small text-danger" id="${props.form.submitStatus.id.error}"></p>
                                                <p class="small text-success" id="${props.form.submitStatus.id.sucess}"></p>
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
    console.log(props)

    let components = {
        header:PJSCCategoriesFormHeader(props.header),
        category:{
            forms:{
                create:PJSCCategoryFormCreate({
                    title:props.category.form.create.title,
                    form:{
                        id:props.category.form.create.id,
                        submitStatus:{
                            error:props.category.form.create.submitStatus.id.error,
                            success:props.category.form.create.submitStatus.id.success,
                        }
                    }
                }),
                update:''
            },
            table:PJSCSubCategoryTable(props.category.table)
        },
        subCategory:{
            forms:{
                create:PJSCSubCategoryFormCreate({
                    title:props.subCategory.form.create.title,
                    form:{
                        id:props.subCategory.form.create.id,
                        submitStatus:{
                            error:props.subCategory.form.create.submitStatus.id.error,
                            success:props.subCategory.form.create.submitStatus.id.success,
                        }
                    }
                }),
                update:''
            },
            table:PJSCSubCategoryTable(props.subCategory.table)
        }
    }

    if(props.container instanceof Element){
        props.container.innerHTML += components.category.forms.create;
        props.container.innerHTML += components.category.forms.update;
        props.container.innerHTML += components.category.table;

        props.container.innerHTML += components.subCategory.forms.create;
        props.container.innerHTML += components.subCategory.forms.update;
        props.container.innerHTML += components.subCategory.table;
    }else{
        document.querySelector(props.container).innerHTML += components.category.forms.create;
        document.querySelector(props.container).innerHTML += components.category.forms.update;
        document.querySelector(props.container).innerHTML += components.category.table;

        document.querySelector(props.container).innerHTML += components.subCategory.forms.create;
        document.querySelector(props.container).innerHTML += components.subCategory.forms.update;
        document.querySelector(props.container).innerHTML += components.subCategory.table;
    }
}