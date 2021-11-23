let date = new Date();
document.getElementById("date").innerHTML = date.toDateString();

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

const reference = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(reference)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const town = jsonObject['towns'];

        /*Preston Section*/
        const section1 = document.createElement('section');
        document.querySelector('div.townData').appendChild(section1);

        const prestTitle = document.createElement('h3');
        prestTitle.textContent = town[6].name;
        section1.appendChild(prestTitle);

        const prestMotto = document.createElement('p');
        prestMotto.textContent = town[6].motto;
        section1.appendChild(prestMotto);

        const prestImage = document.createElement('img');
        prestImage.setAttribute('src', "images/preston.jpg");
        prestImage.setAttribute('alt', "Preston");
        section1.appendChild(prestImage);

        const prestYear = document.createElement ('p');
        prestYear.textContent = `Year Founded: ${town[6].yearFounded}`;
        section1.appendChild(prestYear);

        const prestPop = document.createElement ('p');
        prestPop.textContent = `Population: ${town[6].currentPopulation}`;
        section1.appendChild(prestPop);

        const prestRain = document.createElement ('p');
        prestRain.textContent = `Annual Rain Fall: ${town[6].averageRainfall}`;
        section1.appendChild(prestRain);

        /*Soda Spring Section*/
        const section2 = document.createElement('section');
        document.querySelector('div.townData').appendChild(section2);

        const sodaTitle = document.createElement('h3');
        sodaTitle.textContent = town[0].name;
        section2.appendChild(sodaTitle);

        const sodaMotto = document.createElement('p');
        sodaMotto.textContent = town[0].motto;
        section2.appendChild(sodaMotto);

        const sodaImg = document.createElement('img');
        sodaImg.setAttribute('src', "images/sodasprings.jpg");
        sodaImg.setAttribute('alt', "Soda Springs");
        section2.appendChild(sodaImg);

        const sodaYear = document.createElement('p');
        sodaYear.textContent = `Year Founded: ${town[0].yearFounded}`;
        section2.appendChild(sodaYear);

        const sodaPop = document.createElement('p');
        sodaPop.textContent = `Population: ${town[0].currentPopulation}`;
        section2.appendChild(sodaPop);

        const sodaRain = document.createElement('p');
        sodaRain.textContent = `Annual Rain Fall: ${town[0].averageRainfall}`;
        section2.appendChild(sodaRain);

        /*Fish Haven Section*/
        const section3 = document.createElement('section');
        document.querySelector('div.townData').appendChild(section3);

        const fishTitle = document.createElement('h3');
        fishTitle.textContent = town[2].name;
        section3.appendChild(fishTitle);

        const fishMotto = document.createElement('p');
        fishMotto.textContent = town[2].motto;
        section3.appendChild(fishMotto);

        const fishImg = document.createElement('img');
        fishImg.setAttribute('src', "images/fishhaven.jpg");
        fishImg.setAttribute('alt', "Fish Haven");
        section3.appendChild(fishImg);

        const fishYear = document.createElement('p');
        fishYear.textContent = `Year Founded: ${town[2].yearFounded}`;
        section3.appendChild(fishYear);

        const fishPop = document.createElement('p');
        fishPop.textContent = `Population: ${town[2].currentPopulation}`;
        section3.appendChild(fishPop);

        const fishRain = document.createElement('p');
        fishRain.textContent = `Annual Rain Fall: ${town[2].averageRainfall}`;
        section3.appendChild(fishRain);
        
    })