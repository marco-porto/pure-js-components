const PJSCGenerateSelectStruct = props => {
    let html = '';

    html = `<label for="${props.id}">${props.label}</label>
            <span class="btn action-btn btn-xs component-flat float-right" data-toggle="tooltip" data-placement="left" title="${props.desc}">
                <i class="mdi mdi-information-outline text-muted mdi-2x"></i>
            </span>
            <select class="custom-select" name="${props.name}" id="${props.id}" ${props.disabled ? 'disabled' : ''}>
                ${props.options.selected != undefined ? `<option selected value="${props.options.selected}">${props.options.selected}</option>` : ''}
                ${
                    
                    props.options.normal.map(value => {
                        if(props.options.selected != undefined){
                            if(props.options.selected != value){
                                return `<option value="${value}">${value}</option>`
                            }
                        }else{
                            return `<option value="${value}">${value}</option>`
                        }
                    })
                }
            </select>`;

    return html;
}

const PJSCAppendSelectToContainer = props => {
    if(props.container instanceof Element){
        props.container.innerHTML = PJSCGenerateSelectStruct(props.select);
    }else if(props.container.charAt(0) == '#'){
        document.querySelector(props.container).innerHTML = PJSCGenerateSelectStruct(props.select);
    }else if(props.container.charAt(0) == '.'){
        document.querySelectorAll(props.container).innerHTML = PJSCGenerateSelectStruct(props.select);
    }
}