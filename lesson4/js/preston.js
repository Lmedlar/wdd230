let date = new Date();
document.getElementById("date").innerHTML = date.toDateString();

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}