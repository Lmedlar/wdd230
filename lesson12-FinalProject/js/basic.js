let date = new Date();
document.getElementById("date").innerHTML = date.toDateString();

let mod = document.lastModified;
document.getElementById("dateMod").innerHTML = `Last Modified: ${mod}`;

function toggle() {
    document.getElementsByClassName('navigation')[0].classList.toggle('navClick');
}