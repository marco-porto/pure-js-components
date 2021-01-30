//TEMP VARIABLES DATA
let payloadForTable = {
    columnsMask:[
                    {
                        column:'#',
                        jsonKey:['id'],
                        type:'text'
                    },
                    {
                        column:'Técnico',
                        jsonKey:['name','fileName'],
                        type:'imgProfile'
                    },
                    {
                        column:'Cargo',
                        jsonKey:['rule'],
                        type:'text'
                    },
                    {
                        column:'Email',
                        jsonKey:['email'],
                        type:'text'
                    },
                    {
                        column:'Estado',
                        jsonKey:['status'],
                        type:'text'
                    },
                    {
                        column:'Permissoes',
                        jsonKey:['perms'],
                        type:'tags'
                    },
                    {
                        column:'Confirmada',
                        jsonKey:['account_confirmed'],
                        type:'text'
                    },
                    {
                        column:'Adicionado(a) a',
                        jsonKey:['regst_ini'],
                        type:'text'
                    }  
                ],
    rows:[
        {
            "id": 2,
            "email": "randomemail.com",
            "name": "Random name",
            "fileName": "random.jpg",
            "rule": "Administrador",
            "status": "https://www.youtube.com/watch?v=avLxcVkPgug ",
            "perms": [
              {
                "name": "Criar",
                "color": "success"
              },
              {
                "name": "Ver",
                "color": "warning"
              }
            ],
            "regst_ini": "2020-10-21 17:14:14",
            "account_confirmed": "Sim"
          },
          {
            "id": 3,
            "email": "randomemail.email.com",
            "name": "Double random name",
            "fileName": "double-random.jpeg",
            "rule": "Administrador",
            "status": "https://www.youtube.com/watch?v=avLxcKkPgYr ",
            "perms": [
              {
                "name": "Criar",
                "color": "success"
              },
              {
                "name": "Ver",
                "color": "warning"
              }
            ],
            "regst_ini": "2020-10-21 17:19:39",
            "account_confirmed": "Sim"
          }
        ]
}

//-> tables rows
const appendRowsEventLister = () => PJSCAddEventListenerToTable('#table','table>tbody','click',function(){console.log(this.event.toElement.parentNode.dataset.pjscTableRowId)})

//<======= APPEND TABLES TO CONTAINERS =============================================>
PJSCAppendTableToContainer('#table',payloadForTable,appendRowsEventLister)

//<======= ADD EVENT LISTENERS =============================================>
  //-> search boxs
  PJSCAddEventListenerToFilterInput('#table-filter','keyup',payloadForTable,appendRowsEventLister)
