let date = new Date();
document.getElementById("date").innerHTML = date.toDateString();

let mod = document.lastModified;
document.getElementById("dateMod").innerHTML = `Last Modified: ${mod}`;

function toggle() {
    document.getElementsByClassName('navigation')[0].classList.toggle('navClick');
}


const api = "https://api.openweathermap.org/data/2.5/onecall?lat=38.8213&lon=-121.1930&units=imperial&appid=8ad65ed96128107717960c21be193523";

fetch(api)
    .then((response) => response.json())
    .then((jsObject) => {
        const json = jsObject;
        console.log(json);


        /*currentWeather*/
        let weath = document.createElement('div');

        const iconSrc = `https://openweathermap.org/img/wn/${json.current.weather[0].icon}.png`;
        const currentIcon = document.createElement('img');
        currentIcon.setAttribute('src', iconSrc);
        currentIcon.setAttribute('alt', json.current.weather[0].description);
        weath.appendChild(currentIcon);

        const currentDesc = document.createElement('p');
        currentDesc.textContent = json.current.weather[0].main;
        weath.appendChild(currentDesc);

        document.querySelector('div.currentInfo').appendChild(weath);

        const currentTemp = document.createElement('p');
        currentTemp.textContent = `Tempurature: ${json.current.temp.toFixed(0)} °F`;
        document.querySelector('div.currentInfo').appendChild(currentTemp);

        currentHumid = document.createElement('p');
        currentHumid.textContent = `Humidity: ${json.current.humidity}%`;
        document.querySelector('div.currentInfo').appendChild(currentHumid);


        /*forcastWeather*/
        const weekday = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        
        /*day 1*/
        const day1 = document.createElement('h4');
        day1.textContent = weekday[date.getDay() + 1];
        document.querySelector('div.day1').appendChild(day1);

        let info1 = document.createElement('div');

        const oneIcon = `https://openweathermap.org/img/wn/${json.daily[1].weather[0].icon}.png`;
        const icon1 = document.createElement('img');
        icon1.setAttribute('src', oneIcon);
        icon1.setAttribute('alt', json.daily[1].weather[0].description);
        info1.appendChild(icon1);

        const temp1 = document.createElement('p');
        temp1.textContent = `${json.daily[1].temp.day.toFixed(0)} °F`;
        info1.appendChild(temp1);

        document.querySelector('div.day1').appendChild(info1);

        /*day 2*/
        const day2 = document.createElement('h4');
        day2.textContent = weekday[date.getDay() + 2];
        document.querySelector('div.day2').appendChild(day2);

        let info2 = document.createElement('div');

        const twoIcon = `https://openweathermap.org/img/wn/${json.daily[2].weather[0].icon}.png`;
        const icon2 = document.createElement('img');
        icon2.setAttribute('src', twoIcon);
        icon2.setAttribute('alt', json.daily[2].weather[0].description);
        info2.appendChild(icon2);

        const temp2 = document.createElement('p');
        temp2.textContent = `${json.daily[2].temp.day.toFixed(0)} °F`;
        info2.appendChild(temp2);

        document.querySelector('div.day2').appendChild(info2);

        /*day 3*/
        const day3 = document.createElement('h4');
        day3.textContent = weekday[date.getDay() + 3];
        document.querySelector('div.day3').appendChild(day3);

        let info3 = document.createElement('div');

        const threeIcon = `https://openweathermap.org/img/wn/${json.daily[3].weather[0].icon}.png`;
        const icon3 = document.createElement('img');
        icon3.setAttribute('src', threeIcon);
        icon3.setAttribute('alt', json.daily[3].weather[0].description);
        info3.appendChild(icon3);

        const temp3 = document.createElement('p');
        temp3.textContent = `${json.daily[3].temp.day.toFixed(0)} °F`;
        info3.appendChild(temp3);

        document.querySelector('div.day3').appendChild(info3);


        /*weather alert*/

        if(json.current.weather[0].main == 'Rain'){
            alert('Heavy rain! Be careful when driving!');
        } else if(json.current.weather[0].main == "Fog"){
            alert('Dense Fog! Be careful when driving!');
        } else if(json.current.weather[0].main == "Snow"){
            alert('Heavy snow! Be careful when driving!');
        } else {
            return;
        }

    });