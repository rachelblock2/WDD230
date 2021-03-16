// ----------- Calculate current windchill on Preston Page--------- //
temperature = document.querySelector("#current_2").innerHTML
windSpeed = document.querySelector("#current_5").innerHTML

if (temperature < 50 && windSpeed > 3) {
    totalWindChill = calcWindchill(temperature, windSpeed)
    document.querySelector("#total_wind_chill").innerHTML = totalWindChill + "\u00B0"
} else {
    document.querySelector("#total_wind_chill").innerHTML = "N/A"
}



// ----------- Calculate current windchill on Fish Haven Page--------- //
fhTemperature = document.querySelector("#fh_current_2").innerHTML
fhWindSpeed = document.querySelector("#fh_current_5").innerHTML

console.log(fhTemperature)
console.log(fhWindSpeed)

if (fhTemperature < 50 && fhWindSpeed > 3) {
    totalWindChill = calcWindchill(fhTemperature, fhWindSpeed)
    document.querySelector("#fh_total_wind_chill").innerHTML = totalWindChill + "\u00B0"
} else {
    document.querySelector("#fh_total_wind_chill").innerHTML = "N/A"
}


// ------- Windchill calculation function ----------//
function calcWindchill(currentTemp, currentWindSpeed) {
    windChill = 35.74 + (0.6215 * currentTemp) - (35.74 * (currentWindSpeed ** 0.16)) + (0.4275 * currentTemp * (currentWindSpeed ** 0.16))
    roundedWindChill = windChill.toFixed(0)
    return roundedWindChill
}