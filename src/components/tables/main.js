//TEMP VARIABLES DATA
/*let payloadForImgTable = {
    columnsMask:[
                    {
                        column:'#',
                        jsonKey:['id'],
                        type:'text'
                    },
                    {
                        column:'Utente',
                        jsonKey:['name','fileName'],
                        type:'imgProfile'
                    },
                    {
                        column:'Password',
                        jsonKey:['password'],
                        type:'text'
                    },
                    {
                        column:'Género',
                        jsonKey:['gender'],
                        type:'text'
                    },
                    {
                        column:'Data de nascimento',
                        jsonKey:['dateBirth'],
                        type:'text'
                    },
                    {
                        column:'Estado',
                        jsonKey:['status'],
                        type:'text'
                    },
                    {
                        column:'Resposta social',
                        jsonKey:['institutionPolo'],
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
            "id": 1,
            "id_institution": 1,
            "id_institution_polo": 2,
            "name": "Jorge Caetano",
            "password": 34303,
            "dateBirth": "2020-11-27",
            "gender": "Masculino",
            "comment": "Sem observações",
            "fileName": "alt",
            "regst_ini": "2020-11-25 14:34:19",
            "regst_fin": null,
            "status": "Ativa",
            "institutionPolo": "Centro de Dia"
          },
          {
            "id": 2,
            "id_institution": 1,
            "id_institution_polo": 2,
            "name": "Sancho Jorge",
            "password": 31303,
            "dateBirth": "2020-11-25",
            "gender": "Transgénero",
            "comment": "Sem observações",
            "fileName": "alt",
            "regst_ini": "2020-11-25 14:34:38",
            "regst_fin": null,
            "status": "Ativa",
            "institutionPolo": "Centro de Dia"
          }
        ]
}
*/

let payloadForImgTable = {
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
            "status": "Ativa",
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
            "status": "Ativa",
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
const reappend2 = () => PJSCAddEventListenerToTable('#img-table','table>tbody','click',function(){pullinfofrompayload(payloadForImgTable,this.event.toElement.parentNode.dataset.pjscTableRowId)})

//<======= APPEND TABLES TO CONTAINERS =============================================>
PJSCAppendTableToContainer('#img-table',payloadForImgTable,reappend2)

//<======= ADD EVENT LISTENERS =============================================>
  //-> search boxs
  PJSCAddEventListenerToFilterInput('#img-table-filter','keyup',payloadForImgTable,reappend2)
  




  const pullinfofrompayload = (payload,id) => payload.rows.map(row => {if(row.id == id) console.log(row)})
