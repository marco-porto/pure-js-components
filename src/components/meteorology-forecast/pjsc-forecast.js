//<====== GENERATE FORECAST COMPONENT ==================================================================================================>
const PJSCGenForecastComponent = (forecast,animationsRootDirPath) => {
    let forecastComponent = '';
    let forecastImgAnimation = [
        {
            path:'storm.gif',
            tags:['heavy rain and thunderstorms','showers and thunderstorms']
        },
        {
            path:'sun-clouds.gif',
            tags:['partly cloudy','sunny intervals']
        },
        {
            path:'clouds.gif',
            tags:['cloudy','cloudy (high cloud)','sunny intervals','partly cloudy','convective clouds']
        },
        {
            path:'sun-rain.gif',
            tags:['showers/rain','light showers/rain','heavy showers/rain','rain/showers','light rain','heavy rain/showers','intermittent rain','intermittent ligth rain','intermittent heavy rain','drizzle']
        },
        {
            path:'sun-snow.gif',
            tags:['snow','hail','frost','snow showers','rain and snow']
        },
        {
            path:'sun.gif',
            tags:['clear sky']
        },
        {
            path:'thunder.gif',
            tags:['thunderstorms']
        },
        {
            path:'fog.gif',
            tags:['fog','mist']
        }
    ];

    let forecastBadges = [
        {
            type:'wind',
            badge:[
                {
                    color:'success',
                    tags:['weak']
                },
                {
                    color:'warning',
                    tags:['moderate']
                },
                {
                    color:'danger',
                    tags:['strong','very strong']
                }
            ]
        },
        {
            type:'rain',
            badge:[
                {
                    color:'success',
                    tags:['weak']
                },
                {
                    color:'warning',
                    tags:['moderate']
                },
                {
                    color:'danger',
                    tags:['strong','very strong']
                }
            ]
        },
        {
            type:'rain-percentage',
            badge:[
                {
                    color:'success',
                    tags:[0,25]
                },
                {
                    color:'warning',
                    tags:[26,50]
                },
                {
                    color:'danger',
                    tags:[51,100]
                }
            ]
        }
    ];


    let forecastCardinalPoints = [
        {
            short:'n',
            full:{
                EN:'North',
                PT:'Norte'
            }
        },
        {
            short:'e',
            full:{
                EN:'East',
                PT:'Leste'
            }
        },
        {
            short:'s',
            full:{
                EN:'South',
                PT:'Sul'
            }
        },
        {
            short:'w',
            full:{
                EN:'West',
                PT:'Oeste'
            }
        },
        {
            short:'ne',
            full:{
                EN:'Northeast',
                PT:'Nordeste'
            }
        },
        {
            short:'se',
            full:{
                EN:'Southeast',
                PT:'Sudeste'
            }
        },
        {
            short:'sw',
            full:{
                EN:'Southwest',
                PT:'Sudoeste'
            }
        },
        {
            short:'nw',
            full:{
                EN:'Northwest',
                PT:'Noroeste'
            }
        }
    ];

    //Generate forecast component
        //->Header forecast card
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
        //->Body (Cards) Forecast
        forecastComponent += '<div class="d-flex flex-row" style="overflow-x: auto;">';
            forecast.data.map(day => {
                forecastComponent +=`<div class="d-flex align-items-center flex-column mt-5 mb-3">
                                        <div class="d-flex flex-column align-items-center h-50">
                                            <img src="${animationsRootDirPath}${forecastImgAnimation.map(animation => {
                                                if(animation.tags.includes(day.weather.EN.toLowerCase())){
                                                    return animation.path
                                                }
                                            }).join('')}" class="img-fluid h-auto w-50">
                                            <p class="mt-4 text-muted">${day.weather.PT}</p>
                                        </div>
                                        <div class="mt-3">
                                            <div class="grid table-responsive">
                                                <table class="table table-stretched">
                                                    <thead>
                                                        <tr><th><p class="display-4">${day.date.forecast.split('/')[1]}/${day.date.forecast.split('/')[0]}/${day.date.forecast.split('/')[2]}</p></th></tr>
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
                                                                <div class="badge badge-${forecastBadges.map(badge => {
                                                                                                if(badge.type == 'wind'){
                                                                                                    let color = badge.badge.map(badge => {
                                                                                                        if(badge.tags.includes(day.wind.type.EN.toLowerCase())){
                                                                                                            return badge.color;
                                                                                                        }
                                                                                                    }).join('');
                                                                                                    return color;
                                                                                                }
                                                                                            }).join('')
                                                                                        }">${day.wind.type.PT}</div>
                                                                <div class="badge badge-secondary">
                                                                    ${day.wind.direction} -
                                                                    ${forecastCardinalPoints.map(direction => {
                                                                        if(direction.short == day.wind.direction.toLowerCase()){
                                                                            return direction.full.PT;
                                                                        }
                                                                      }).join('')
                                                                    }
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <p class="mb-n1 font-weight-medium">Precipitação</p>
                                                                <small class="text-gray">Quantidade/Probabilidade</small>
                                                            </td>
                                                            <td class=" font-weight-medium">
                                                                <div class="badge badge-${forecastBadges.map(badge => {
                                                                                                if(badge.type == 'rain'){
                                                                                                    let color = badge.badge.map(badge => {
                                                                                                        if(badge.tags.includes(day.rain.type.EN.toLowerCase())){
                                                                                                            return badge.color;
                                                                                                        }
                                                                                                    }).join('');
                                                                                                    return color;
                                                                                                }
                                                                                            }).join('')
                                                                                        }">${day.rain.type.PT}</div>
                                                                <div class="badge badge-${forecastBadges.map(badge => {
                                                                    if(badge.type == 'rain-percentage'){
                                                                        let color = badge.badge.map(badge => {
                                                                            if(Math.round(day.rain.probabilityPercentage) >= badge.tags[0] && Math.round(day.rain.probabilityPercentage) <= badge.tags[1]){
                                                                                return badge.color;
                                                                            }
                                                                        }).join('');
                                                                        return color;
                                                                    }
                                                                }).join('')
                                                            }">${Math.round(day.rain.probabilityPercentage)}%</div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>`;
            });
        forecastComponent += '</div>';

    return forecastComponent;
}

async function PJSCAppendForecastToContainer(containerId,forecast,animationsRootDirPath){
    //Prevent undefined elementId passed to function
    let container = document.querySelector(containerId);
    try{
        if(container == null)
            throw 'Unknown containerId passed to function PJSCAppendForecastToContainer() 😵';
    }catch(e){
        console.error(e);
    }
    
    //Fetch forecast zone
    const capsuleApiZoneResponse = fetch('https://capsule-api-rosy.vercel.app/api/meteorology/zones',{
        method:'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({local:forecast.local,filterBy:forecast.filterBy})
    });
    const capsuleApiZoneResponseJson = await (await capsuleApiZoneResponse).json();

    if(capsuleApiZoneResponseJson != undefined){
        if(capsuleApiZoneResponseJson[0].globalIdLocal != undefined){
           
            //Fetch forecast info for the zone
            const capsuleApiForecastResponse = fetch('https://capsule-api-rosy.vercel.app/api/meteorology/forecast',{
                method:'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({localCode:capsuleApiZoneResponseJson[0].globalIdLocal})
            });
            const capsuleApiForecastResponseJson = await (await capsuleApiForecastResponse).json();
            if(capsuleApiForecastResponseJson != undefined){
                container.innerHTML = PJSCGenForecastComponent({data:capsuleApiForecastResponseJson,local:capsuleApiZoneResponseJson[0].local},animationsRootDirPath);
            }
        }
    }
    console.log('[PJSC] Forecast component been appended successfully 🚀');
}