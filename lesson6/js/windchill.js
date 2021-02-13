temperature = document.querySelector("#temp_calc").innerHTML
windSpeed = document.querySelector("#wind_speed_calc").innerHTML

if (temperature < 50 && windSpeed > 3) {
    totalWindChill = calcWindchill(temperature, windSpeed)
    document.querySelector("#total_wind_speed").innerHTML = totalWindChill + "\u00B0"
} else {
    document.querySelector("#total_wind_speed").innerHTML = "N/A"
}

function calcWindchill(currentTemp, currentWindSpeed) {
    windChill = 35.74 + (0.6215 * currentTemp) - (35.74 * (currentWindSpeed ** 0.16)) + (0.4275 * currentTemp * (currentWindSpeed ** 0.16))
    roundedWindChill = windChill.toFixed(0)
    return roundedWindChill
}
