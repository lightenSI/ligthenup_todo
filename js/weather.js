const city = document.querySelector("#weather span:first-child");
const weather = document.querySelector("#weather span:last-child");
const API_KEY = "d758c8686a52e6b6d5621c6da6003d52";

function onGeoCo(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
       city.innerText = `${data.name} : `;
       weather.innerText = `${data.weather[0].main}, ${Math.round(data.main.temp)}℃ `;
    });
}

function onGeoErr(){
    alert("⚠Can't find you, No weather for you.");

}

navigator.geolocation.getCurrentPosition(onGeoCo, onGeoErr);
