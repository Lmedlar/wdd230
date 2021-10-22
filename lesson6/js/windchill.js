let speed = parseFloat(document.getElementById("speed").innerHTML);
let temp = parseFloat(document.getElementById("temp").innerHTML);

let speed2 = Math.pow(speed, 0.16);
let result = 35.74 + (0.6215 * temp) - (35.75 * speed2) + (0.4275 * temp * speed2);

document.getElementById("chill").innerHTML = result.toFixed(2);