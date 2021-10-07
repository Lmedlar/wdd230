let date = new Date();
document.getElementById("date").innerHTML = date.toDateString();

function toggleMenu() {
    document.getElementByClassName("navigation").classList.toggle("responsive");
}