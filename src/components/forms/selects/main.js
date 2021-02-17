let data = [
    'Bem-estar',
    'Ginástica',
    'Karaoke',
    'Ouvir música',
    'Receitas de culinária',
    'Religião',
    'Trabalhos manuais'
]

PJSCAppendSelectToContainer({
    container:'#container-select-input',
    select:{
        options:{
            normal:data,
            selected:'Bem-estar'
        },
        disabled:false,
        label:'Categoria',
        desc:'Associar uma categoria a este conteúdo',
        id:'inputCategories'
    }
});