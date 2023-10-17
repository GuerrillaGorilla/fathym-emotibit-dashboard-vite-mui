const convertUnitsTo = {
  kelvinToFahrenheit: (value: number) => roundOff((value * 9 / 5 - 459.67), 2),
  kelvinToCelcius: (value: number) => roundOff((value - 273.15), 2),
  celciusToFahrenheit: (value: number) => roundOff((value * 9 / 5 + 32), 2),
  celciusToKelvin: (value: number) => roundOff((value + 273.15), 2),
  fahrenheitToKelvin: (value: number) => roundOff((value + 459.67) * 5 / 9, 2),
  fahrenheitToCelcius: (value: number) => roundOff((value - 32) * 5 / 9, 2),
  mSecToMPH: (value: number) => roundOff(value * 2.237, 2),
  mSecToKmh: (value: number) => roundOff(value * 3.6, 2),
  mmphToInph: (value: number) => roundOff(value / 25.4, 2),
  mmphToCmph: (value: number) => roundOff(value / 10, 2),
  metersToMiles: (value: number) => roundOff(value / 1609.344, 2),
  metersToKilometers: (value: number) => roundOff(value / 1000, 2),
  paToKpa: (value: number) => roundOff(value / 1000, 2),
  paToMBar: (value: number) => roundOff(value / 100, 2),
  paToMmHg: (value: number) => roundOff(value / 133.3223684, 2),
  roundToTens: (value: number) => roundOff(value, 1),
  roundToHund: (value: number) => roundOff(value, 2),
  roundToThou: (value: number) => roundOff(value, 3),
  roundToTenThou: (value: number) => roundOff(value, 4),
  roundToHundThou: (value: number) => roundOff(value, 5)
};

function roundOff(num: number, places: number) {
  const x = Math.pow(10, places);
  return Math.round(num * x) / x;
}

export { convertUnitsTo };