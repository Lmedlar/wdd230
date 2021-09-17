let now = new Date();
let year = now.getFullYear();
document.getElementById("currentyear").innerHTML = year;

let mod = document.lastModified;
document.getElementById("modDate").innerHTML = `Last Modified: ${mod}`;