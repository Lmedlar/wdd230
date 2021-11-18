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
