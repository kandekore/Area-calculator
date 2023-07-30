function convertToSquareMeters(length, width, lengthUnit, widthUnit) {
  // Conversion factors (1 meter = x units)
  const conversionFactors = {
    cm: 0.0001,
    ft: 0.09290304,
    in: 0.00064516,
    m: 1
  };

  const lengthInMeters = length * conversionFactors[lengthUnit];
  const widthInMeters = width * conversionFactors[widthUnit];

  return lengthInMeters * widthInMeters;
}

function calculateArea() {
  const length = parseFloat(document.getElementById("length").value);
  const width = parseFloat(document.getElementById("width").value);
  const lengthUnit = document.getElementById("lengthUnit").value;
  const widthUnit = document.getElementById("widthUnit").value;
  const resultUnit = document.getElementById("resultUnit").value;

  const areaInSquareMeters = convertToSquareMeters(
    length,
    width,
    lengthUnit,
    widthUnit
  );

  const resultFactors = {
    cm: 1000,
    ft: 3.28084,
    in: 0.00064516,
    m: 1
  };

  // Conversion factors to the selected result unit
  const resultConversionFactors = {
    m2: 1,
    ft2: 10.7639, // 1 square meter = 10.7639 square feet
    in2: 1550.0031, // 1 square meter = 1550.0031 square inches
    cm2: 10000 // 1 square meter = 10000 square centimeters
  };

  const areaInResultUnit =
    areaInSquareMeters * resultConversionFactors[resultUnit];

  document.getElementById(
    "result"
  ).textContent = `Area: ${areaInResultUnit.toFixed(2)} ${resultUnit}`;
}
