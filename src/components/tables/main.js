//TEMP VARIABLES DATA
let payloadForTable = {
    columnsMask:[
      {
          column:'#',
          jsonKey:['id'],
          type:'text'
      },
      {
          column:'Titulo',
          jsonKey:['title'],
          type:'text'
      },
      {
          column:'Palavras máximas',
          jsonKey:['max_generate_words'],
          type:'text'
      },
      {
          column:'Pontuação máxima',
          jsonKey:['max_point'],
          type:'text'
      },
      {
          column:'Palavras associadas',
          jsonKey:['words'],
          type:'array',
          joinBy:';'
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
    rows:[
          {
            id: 1,
            max_generate_words: 5,
            max_point: 10,
            owner: "Random person 22",
            regst_ini: "2021-01-29 19:29:52",
            status: "Público",
            title: "Lojas",
            words: ["Frutaria  (Frutas)", "Papelaria  (Papel)", "Peixaria  (Peixe)"],
          },
          {
            id: 2,
            max_generate_words: 45,
            max_point: 30,
            owner: "Random person",
            regst_ini: "2021-01-29 19:29:52",
            status: "Público",
            title: "Coisas",
            words: ["OLA  (TYE)", "Papelaria  (Papel)", "Peixaria  (Peixe)"],
          }
        ]
}

//-> tables rows
const appendRowsEventLister = () => PJSCAddEventListenerToTable('#table','table>tbody','click',function(){console.log(this.event.toElement.parentNode);console.log(this.event.toElement.parentNode.dataset.pjscTableRowId)})

//<======= APPEND TABLES TO CONTAINERS =============================================>
PJSCAppendTableToContainer('#table',payloadForTable,appendRowsEventLister)

//<======= ADD EVENT LISTENERS =============================================>
  //-> search boxs
  PJSCAddEventListenerToFilterInput('#table-filter','keyup',payloadForTable,appendRowsEventLister)
