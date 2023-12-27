const img = document.querySelector('img');

async function getCats(){
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=65Wz4JPv0ciQq7Nn3MJX2zOv6DsldlSN&s=cats', {mode: 'cors'})
    const catData = await response.json();
    img.src = catData.data.images.original.url;
}

getCats();