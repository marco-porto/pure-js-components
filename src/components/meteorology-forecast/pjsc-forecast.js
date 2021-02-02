//<====== FETCH ZONE INFO ===============================================================================================================>
async function PJSCFetchZone(zone){
    const capsuleApiZoneResponse = fetch('https://capsule-api-rosy.vercel.app/api/meteorology/zones',{
        method:'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({local:zone.local,filterBy:zone.filterBy})
    });
    
    const capsuleApiZoneResponseJson = await (await capsuleApiZoneResponse).json();
    if(capsuleApiZoneResponseJson != undefined){
        if(capsuleApiZoneResponseJson[0].globalIdLocal != undefined){
            PJSCFetchForecast({code:capsuleApiZoneResponseJson[0].globalIdLocal,name:capsuleApiZoneResponseJson[0].local})
        }
    }
}

//<===== FETCH FORECAST INFO ==============================================================================================================>
async function PJSCFetchForecast(zone){
    const capsuleApiForecastResponse = fetch('https://capsule-api-rosy.vercel.app/api/meteorology/forecast',{
        method:'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({localCode:zone.code})
    });
    
    const capsuleApiForecastResponseJson = await (await capsuleApiForecastResponse).json();
    if(capsuleApiForecastResponseJson != undefined){
        PJSCGenForecastComponent({data:capsuleApiForecastResponseJson,local:zone.name});
    }
}


//<====== GENERATE FORECAST COMPONENT ==================================================================================================>
let forecastComponent = '';
const PJSCGenForecastComponent = (forecast) => {
    //Header forecast card
    forecastComponent +=`<div class="split-header">
                            <p class="card-title">Previsão para 10 dias</p>
                        </div>
                        <div class="d-flex align-items-end mt-2">
                            <h3>${forecast.local}</h3>
                        </div>
                        <div class="d-flex mt-2">
                            <div class="wrapper d-flex pr-4">
                                <small class="text-primary font-weight-medium mr-2">Fonte</small>
                                <small class="text-gray">Instituto Português do Mar e da Atmofera (IPMA)</small>
                            </div>
                        </div>`;
    //Body (Cards) Forecast
    forecastComponent += '<div class="d-flex flex-row" style="overflow-x: auto;">';
        forecast.data.map(day => {
            forecastComponent +=`<div class="d-flex flex-column">
                                    <div class="d-flex flex-column align-items-center mt-5 mb-3">
                                        <img src="icons/sun-rain.gif" class="img-fluid w-50">
                                        <p class="mt-4 text-muted">${day.weather.PT}</p>
                                    </div>
                                    <div class="mt-5 mb-3">
                                        <div class="grid table-responsive">
                                            <table class="table table-stretched">
                                                <thead>
                                                    <tr><th><p class="display-4">${day.date.forecast}</p></th></tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <p class="mb-n1 font-weight-medium">Temperatura</p>
                                                            <small class="text-gray">Max/Min</small>
                                                        </td>
                                                        <td class="font-weight-medium">
                                                            <div class="badge badge-danger">${day.temperature.max}ºC</div>
                                                            <div class="badge badge-primary" style="background-color: #006acc;">${day.temperature.min}ºC</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p class="mb-n1 font-weight-medium">Vento</p>
                                                            <small class="text-gray">Velocidade/Direção</small>
                                                        </td>
                                                        <td class=" font-weight-medium">
                                                            <div class="badge badge-success">${day.wind.type.PT}</div>
                                                            <div class="badge badge-secondary">${day.wind.direction}</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p class="mb-n1 font-weight-medium">Precipitação</p>
                                                            <small class="text-gray">Quantidade/Probabilidade</small>
                                                        </td>
                                                        <td class=" font-weight-medium">
                                                            <div class="badge badge-success">${day.rain.type.PT}</div>
                                                            <div class="badge badge-danger">${day.rain.probabilityPercentage}%</div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>`;
        });
    forecastComponent += '</div>';
}

//<===== APPEND FORECAST TO A GIVEN CONTAINER =========================================================================================>
const PJSCAppendForecastToContainer = (containerId,forecast) => {
    //Prevent undefined elementId passed to function
    let container = document.querySelector(containerId);
    try{
        if(container == null)
            throw 'Unknown containerId passed to function PJSCAppendForecastToContainer() 😵';
    }catch(e){
        console.error(e);
    }
    //PJSCFetchZone(forecast);

    setTimeout(() => {container.innerHTML = forecastComponent;},5000)
    console.log('[PJSC] Forecast been appended successfully 🚀');
}