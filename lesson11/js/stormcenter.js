function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function adjustRange(rating) {
    document.getElementById("range").innerHTML = rating;
}