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

const apiURL="https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=8ad65ed96128107717960c21be193523"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current').textContent=`${jsObject.main.temp} °F`;

        document.getElementById('temp').textContent=`${jsObject.main.temp_max} °F`;

        document.getElementById('humid').textContent=`${jsObject.main.humidity}%`;

        document.getElementById('speed').textContent=`${jsObject.wind.speed}mph`;
    });

const forcastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=8ad65ed96128107717960c21be193523"

fetch(forcastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        /*Wed Forcast*/
        const wedIcon = `https://openweathermap.org/img/wn/${jsObject.list[7].weather[0].icon}.png`;
        const wedDesc = jsObject.list[7].weather[0].description;
        document.getElementById("wedicon").setAttribute('src', wedIcon);
        document.getElementById("wedicon").setAttribute('alt', wedDesc);

        document.getElementById('wedtemp').textContent = `${jsObject.list[7].main.temp} °F`;

         /*Thu Forcast*/
         const thuIcon = `https://openweathermap.org/img/wn/${jsObject.list[15].weather[0].icon}.png`;
         const thuDesc = jsObject.list[15].weather[0].description;
         document.getElementById("thuicon").setAttribute('src', thuIcon);
         document.getElementById("thuicon").setAttribute('alt', thuDesc);
 
         document.getElementById('thutemp').textContent = `${jsObject.list[15].main.temp} °F`;

        /*Fri Forcast*/
        const friIcon = `https://openweathermap.org/img/wn/${jsObject.list[23].weather[0].icon}.png`;
        const friDesc = jsObject.list[23].weather[0].description;
        document.getElementById("friicon").setAttribute('src', friIcon);
        document.getElementById("friicon").setAttribute('alt', friDesc);

        document.getElementById('fritemp').textContent = `${jsObject.list[23].main.temp} °F`;

         /*Sat Forcast*/
         const satIcon = `https://openweathermap.org/img/wn/${jsObject.list[31].weather[0].icon}.png`;
         const satDesc = jsObject.list[31].weather[0].description;
         document.getElementById("saticon").setAttribute('src', satIcon);
         document.getElementById("saticon").setAttribute('alt', satDesc);
 
         document.getElementById('sattemp').textContent = `${jsObject.list[31].main.temp} °F`;

          /*Sun Forcast*/
        const sunIcon = `https://openweathermap.org/img/wn/${jsObject.list[39].weather[0].icon}.png`;
        const sunDesc = jsObject.list[39].weather[0].description;
        document.getElementById("sunicon").setAttribute('src', sunIcon);
        document.getElementById("sunicon").setAttribute('alt', sunDesc);

        document.getElementById('suntemp').textContent = `${jsObject.list[39].main.temp} °F`;
    });