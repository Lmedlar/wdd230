let now = new Date();
let year = now.getFullYear();
document.getElementById("currentyear").innerHTML = `${year} | Lanea Charlene Medlar | California | `;

let mod = document.lastModified;
document.getElementById("modDate").innerHTML = `Last Modified: ${mod}`;