let date = new Date();
document.getElementById("date").innerHTML = date.toDateString();

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

const apiURL="https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=8ad65ed96128107717960c21be193523";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current').textContent=`${jsObject.main.temp.toFixed(0)} °F`;

        document.getElementById('temp').textContent=`${jsObject.main.temp_max.toFixed(0)} °F`;

        document.getElementById('humid').textContent=`${jsObject.main.humidity}%`;

        document.getElementById('speed').textContent=`${jsObject.wind.speed.toFixed(0)} mph`;
    });

    

const forcastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=8ad65ed96128107717960c21be193523";

fetch(forcastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        /*Wed Forcast*/
        const wedIcon = `https://openweathermap.org/img/wn/${jsObject.list[7].weather[0].icon}.png`;
        const wedDesc = jsObject.list[7].weather[0].description;
        document.getElementById("wedicon").setAttribute('src', wedIcon);
        document.getElementById("wedicon").setAttribute('alt', wedDesc);

        document.getElementById('wedtemp').textContent = `${jsObject.list[7].main.temp.toFixed(0)} °F`;

         /*Thu Forcast*/
         const thuIcon = `https://openweathermap.org/img/wn/${jsObject.list[15].weather[0].icon}.png`;
         const thuDesc = jsObject.list[15].weather[0].description;
         document.getElementById("thuicon").setAttribute('src', thuIcon);
         document.getElementById("thuicon").setAttribute('alt', thuDesc);
 
         document.getElementById('thutemp').textContent = `${jsObject.list[15].main.temp.toFixed(0)} °F`;

        /*Fri Forcast*/
        const friIcon = `https://openweathermap.org/img/wn/${jsObject.list[23].weather[0].icon}.png`;
        const friDesc = jsObject.list[23].weather[0].description;
        document.getElementById("friicon").setAttribute('src', friIcon);
        document.getElementById("friicon").setAttribute('alt', friDesc);

        document.getElementById('fritemp').textContent = `${jsObject.list[23].main.temp.toFixed(0)} °F`;

         /*Sat Forcast*/
         const satIcon = `https://openweathermap.org/img/wn/${jsObject.list[31].weather[0].icon}.png`;
         const satDesc = jsObject.list[31].weather[0].description;
         document.getElementById("saticon").setAttribute('src', satIcon);
         document.getElementById("saticon").setAttribute('alt', satDesc);
 
         document.getElementById('sattemp').textContent = `${jsObject.list[31].main.temp.toFixed(0)} °F`;

          /*Sun Forcast*/
        const sunIcon = `https://openweathermap.org/img/wn/${jsObject.list[39].weather[0].icon}.png`;
        const sunDesc = jsObject.list[39].weather[0].description;
        document.getElementById("sunicon").setAttribute('src', sunIcon);
        document.getElementById("sunicon").setAttribute('alt', sunDesc);

        document.getElementById('suntemp').textContent = `${jsObject.list[39].main.temp.toFixed(0)} °F`;
    });

const info = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(info)
    .then((response) => response.json())
    .then((jsonObject) => {
        const soda = jsonObject.towns;
        console.log(soda);

        let sec = document.createElement('p');
        sec.textContent = soda[0].events[0];
        document.querySelector('div.info').appendChild(sec);

        let sec2 = document.createElement('p');
        sec2.textContent = soda[0].events[1];
        document.querySelector('div.info').appendChild(sec2);

        let sec3 = document.createElement('p');
        sec3.textContent = soda[0].events[2];
        document.querySelector('div.info').appendChild(sec3);
       
    });