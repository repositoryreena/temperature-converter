const celsius = document.getElementById("celsius")
const fahrenheit = document.getElementById("fahrenheit")
const kelvin = document.getElementById("kelvin")

function fahrenheitFromCelsius(c){
    return (c * 9/5) + 32
}

function kelvinFromCelsius(c){
    return c + 273
}

function celsiusFromFahrenheit(f){
    return (f - 32) * 5/9;
}

function kelvinFromFahrenheit(f){
    return (f - 32) * 5/9 + 273;
}

function celsiusFromKelvin(k){
    return k - 273
}

function fahrenheitFromKelvin(k){
    return (k - 273) * 9/5 + 32
}

celsius.addEventListener('change', function(event) {
    fahrenheit.value = fahrenheitFromCelsius(parseFloat(event.target.value)).toFixed(2);
  });

  celsius.addEventListener('change', function(event) {
    kelvin.value = kelvinFromCelsius(parseFloat(event.target.value)).toFixed(2);
  });

  fahrenheit.addEventListener('change', function(event) {
    celsius.value = celsiusFromFahrenheit(parseFloat(event.target.value)).toFixed(2);
  });

  fahrenheit.addEventListener('change', function(event) {
    kelvin.value = kelvinFromFahrenheit(parseFloat(event.target.value)).toFixed(2);
  });

  kelvin.addEventListener('change', function(event) {
    fahrenheit.value = fahrenheitFromKelvin(parseFloat(event.target.value)).toFixed(2);
  });

  kelvin.addEventListener('change', function(event) {
    celsius.value = celsiusFromKelvin(parseFloat(event.target.value)).toFixed(2);
  });
