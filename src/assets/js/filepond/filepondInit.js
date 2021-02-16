// handle img input for a profile img
const registerInputToFilepondProfileImg = (inputClass,inputFor,options = []) =>{
    FilePond.registerPlugin(
        FilePondPluginFileEncode,
        FilePondPluginFileValidateType,
        FilePondPluginImageExifOrientation,
        FilePondPluginImagePreview,
        FilePondPluginImageCrop,
        FilePondPluginImageResize,
        FilePondPluginImageTransform
    );
    
    if(inputFor == 'insert'){
        FilePond.create(
            document.querySelector(inputClass),{
                labelIdle: `Arrasta e larga uma imagem ou <span class="filepond--label-action">Abre o Explorador</span>`,
                imagePreviewHeight: 170,
                imageCropAspectRatio: '1:1',
                imageResizeTargetWidth: 200,
                imageResizeTargetHeight: 200,
                stylePanelLayout: 'compact circle',
                styleLoadIndicatorPosition: 'center bottom',
                styleButtonRemoveItemPosition: 'center bottom',
            }
        );
    }else if(inputFor == 'update'){
        FilePond.create(
            document.querySelector(inputClass),{
            labelIdle:'',
            imagePreviewHeight: 170,
            imageCropAspectRatio: '1:1',
            imageResizeTargetWidth: 200,
            imageResizeTargetHeight: 200,
            stylePanelLayout: 'compact circle',
            styleLoadIndicatorPosition: 'center bottom',
            styleButtonRemoveItemPosition: 'center bottom',
            files: [{
                    source: options.imgPlaceholder,
                }]
            }
        );
    }
    
}

//handle a normal file input
const registerInputToFilepondFile = (inputClass,inputFor,options = []) => {
    FilePond.registerPlugin(
	    FilePondPluginFileEncode,
        FilePondPluginImageExifOrientation,
        FilePondPluginImagePreview
    );
    
    if(inputFor == 'insert'){
        FilePond.create(document.querySelector(inputClass),{
                labelIdle: `Arrasta e larga uma imagem ou <span class="filepond--label-action">Abre o Explorador</span>`
            });
    }else if(inputFor == 'update'){
        FilePond.create(document.querySelector(inputClass),{
            labelIdle: `Arrasta e larga uma imagem ou <span class="filepond--label-action">Abre o Explorador</span>`,
            files: [{
                source: options.imgPlaceholder,
            }]
        });
    }
}

// destroy a filepond input instance
const DestroyFilePondInstance = inputClass => { FilePond.destroy(document.querySelector(inputClass)); }
