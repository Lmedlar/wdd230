fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        let speed = JSON.parse(jsObject.wind.speed);
        let temp = JSON.parse(jsObject.main.temp_max);
        let result;

        let speed2 = Math.pow(speed, 0.16);
        result = 35.74 + (0.6215 * temp) - (35.75 * speed2) + (0.4275 * temp * speed2);
        document.getElementById("chill").innerHTML = result.toFixed(2);

    });