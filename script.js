function convertToMeters(value, unit) {
  const conversionFactors = {
    cm: 0.01,
    ft: 0.3048,
    in: 0.0254,
    m: 1
  };

  return value * conversionFactors[unit];
}

function calculateArea() {
  const length = parseFloat(document.getElementById("length").value);
  const width = parseFloat(document.getElementById("width").value);
  const lengthUnit = document.getElementById("lengthUnit").value;
  const widthUnit = document.getElementById("widthUnit").value;

  const lengthInMeters = convertToMeters(length, lengthUnit);
  const widthInMeters = convertToMeters(width, widthUnit);

  const areaInSquareMeters = lengthInMeters * widthInMeters;

  document.getElementById(
    "result"
  ).textContent = `Area: ${areaInSquareMeters.toFixed(2)} square meters`;
}
