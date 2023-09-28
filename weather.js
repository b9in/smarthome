function drawWeather( d ) {
    var celcius = Math.round(parseFloat(d.main.temp)-273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 

    document.getElementById('weather_area').innerHTML = d.weather[0].description;
    document.getElementById('temp_area').innerHTML = celcius + '&deg;';
    document.getElementById('city_area').innerHTML = d.name;
    
    if(d.weather[0].id >=200 && d.weather[0].id <= 232){
        //Thunderstorm
        document.getElementById('weather_img').innerHTML = "<img id='img_area' src='img/thunderstorm.svg' alt='thunderstorm'>";
    } 
    else if(d.weather[0].id >= 300 && d.weather[0].id <= 321){
        //Drizzle
        document.getElementById('weather_img').innerHTML = "<img id='img_area' src='img/drizzle.svg' alt='drizzle'>";
    } 
    else if(d.weather[0].id >= 500 && d.weather[0].id <= 531){
        //Rain
        document.getElementById('weather_img').innerHTML = "<img id='img_area' src='img/rain.svg' alt='rain'>";
    } 
    else if(d.weather[0].id >= 600 && d.weather[0].id <= 622){
        //Snow
        document.getElementById('weather_img').innerHTML = "<img id='img_area' src='img/snow.svg' alt='snow'>";
    } 
    else if(d.weather[0].id >= 701 && d.weather[0].id <= 781){
        //Atmosphere
        document.getElementById('weather_img').innerHTML = "<img id='img_area' src='img/atmosphere.svg' alt='atmosphere'>";
    } 
    else if(d.weather[0].id == 800){
        //Clear
        document.getElementById('weather_img').innerHTML = "<img id='img_area' src='img/clear.svg' alt='clear'>";
    } 
    else if(d.weather[0].id >= 801 && d.weather[0].id <= 804){
        //Clouds
        document.getElementById('weather_img').innerHTML = "<img id='img_area' src='img/cloud.svg' alt='clouds'>";
    } 
    else if(d.weather[0].id >= 900 && d.weather[0].id <= 906){
        //Extreme
    } 
    else if(d.weather[0].id >= 951 && d.weather[0].id <= 962){
        //Additional
    } 
    else{
        
    }
}

function weatherBalloon( cityID ) {
    var key = '';
    fetch('https://api.openweathermap.org/data/2.5/weather?id='+cityID+'&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        drawWeather(data); // Call drawWeather
    })
    .catch(function() {
        // catch any errors
    });
}