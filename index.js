const button = document.getElementById('button');

button.addEventListener('click', (e) => {
    e.preventDefault();
    const city_name = document.getElementById('city-name').value;
    var city = document.querySelector('.city');
    var state = document.querySelector('.state');
    const country = document.querySelector('.country');

    async function getWeatherInfo(){
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=d5174f5ba9824e42bf0182214232712&q=${city_name}&days=1&aqi=no&alerts=no`, {mode: 'cors'})
        const weatherData = await response.json();
        city.innerHTML = weatherData.location.name;
        state.innerHTML = weatherData.location.region;
        country.innerHTML = weatherData.location.country;
    }
    getWeatherInfo();
})
