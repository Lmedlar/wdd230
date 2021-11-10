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
        prestImage.setAttribute('src', town[6].photo);
        prestImage.setAttribute('alt', "Preston");
        section1.appendChild(prestImage);

        const prestInfo = document.createElement ('p');
        prestInfo.textContent = `Year Founded: ${town[6].yearFounded}
        Population: ${town[6].currentPopulation}
        Annual Rain Fall: ${town[6].averageRainfall}`;
        section1.appendChild(prestInfo);

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
        sodaImg.setAttribute('src', town[0].photo);
        sodaImg.setAttribute('alt', "Soda Springs");
        section2.appendChild(sodaImg);

        const sodaInfo = document.createElement('p');
        sodaInfo.textContent = `Year Founded: ${town[0].yearFounded}
        Population: ${town[0].currentPopulation}
        Annual Rain Fall: ${town[0].averageRainfall}`;
        section2.appendChild(sodaInfo);

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
        fishImg.setAttribute('src', town[2].photo);
        fishImg.setAttribute('alt', "Fish Haven");
        section3.appendChild(fishImg);

        const fishInfo = document.createElement('p');
        fishInfo.textContent = `Year Founded: ${town[2].yearFounded}
        Population: ${town[2].currentPopulation}
        Annual Rain Fall: ${town[2].averageRainfall}`;
        section3.appendChild(fishInfo);
        
    })