const img = document.querySelector('img');

async function getCats(){
    const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=d5174f5ba9824e42bf0182214232712&q=Belém&days=1&aqi=no&alerts=no', {mode: 'cors'})
    const catData = await response.json();
    img.src = catData.data.images.original.url;
}

getCats();