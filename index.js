const city = document.getElementById('city-name');
const button = document.getElementById('button')

async function getWeatherInfo(){
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=d5174f5ba9824e42bf0182214232712&q=${city}&days=1&aqi=no&alerts=no`, {mode: 'cors'})
    const weatherData = await response.json();
    console.log(weatherData);
}


button.addEventListener('click', (e) => {
    e.preventDefault();
    getWeatherInfo();
})
