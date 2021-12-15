let date = new Date();
document.getElementById("date").innerHTML = date.toDateString();

let mod = document.lastModified;
document.getElementById("dateMod").innerHTML = `Last Modified: ${mod}`;

function toggle() {
    document.getElementsByClassName('navigation')[0].classList.toggle('navClick');
}

function list() {
    document.getElementsByClassName('grid')[0].className = "list";
}
function grid() {
    document.getElementsByClassName('list')[0].className = "grid";
}

fetch("./js/directory.json")
    .then((response) => response.json())
    .then((jsonObject) => {
        const business = jsonObject.companies;
        console.log(business);

        for(let i = 0; i < business.length; i++){
            let tab = document.createElement('article');

            let img = document.createElement('img');
            img.setAttribute('src', business[i].logo);
            img.setAttribute('alt', business[i].description);
            tab.appendChild(img);

            let h3 = document.createElement('h3');
            h3.textContent = business[i].name;
            tab.appendChild(h3);

            let contact = document.createElement('p');
            contact.textContent = business[i].contact;
            tab.appendChild(contact);
            
            let url = document.createElement('a');
            url.setAttribute('href', business[i].url);
            url.textContent = "Website";
            tab.appendChild(url);

            document.querySelector('div.list').appendChild(tab);
        }
    })

