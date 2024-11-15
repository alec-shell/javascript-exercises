const convertToCelsius = function(F) {
  let celsius = (F - 32) * (5/9);
  if (celsius % 1) return Number(celsius.toFixed(1));
  return celsius;
 };

const convertToFahrenheit = function(C) {
  let fahrenheit = C * (9/5) + 32;
  if (fahrenheit % 1) return Number(fahrenheit.toFixed(1));
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
