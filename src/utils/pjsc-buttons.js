const PJSCSubmitButtonState = props => {
    if(props.loading){
        props.button.active.style.display = 'none';
        props.button.loading.style.display = '';
    }else{
        props.button.loading.style.display = 'none';
        props.button.active.style.display = '';
    }
}