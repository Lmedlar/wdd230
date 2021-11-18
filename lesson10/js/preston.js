let date = new Date();
document.getElementById("date").innerHTML = date.toDateString();

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

let banner = document.getElementById("banner");
let day = date.getDay();

if (day == 5) {
    banner.style.display = 'block';
} else {
    banner.style.display = 'none';
}

const apiURL="http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=8ad65ed96128107717960c21be193523"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current').textContent=`${jsObject.main.temp} °F`;

        document.getElementById('temp').textContent=`${jsObject.main.temp_max} °F`;

        document.getElementById('humid').textContent=`${jsObject.main.humidity}%`;

        document.getElementById('speed').textContent=`${jsObject.wind.speed}mph`;
    });

const forcastURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=8ad65ed96128107717960c21be193523"

fetch(forcastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    });