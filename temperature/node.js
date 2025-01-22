document.getElementById("convertBtn").addEventListener("click", function () {
    const tempInput = document.getElementById("temperature").value;
    const selectedUnit = document.getElementById("unit").value;
    const resultDiv = document.getElementById("result");

    // Validate input
    if (isNaN(tempInput) || tempInput.trim() === "") {
        resultDiv.textContent = "Please enter a valid number.";
        resultDiv.style.color = "red";
        return;
    }

    resultDiv.style.color = "#007acc"; // Reset color
    const temp = parseFloat(tempInput);
    let result = "";

    // Conversion logic
    if (selectedUnit === "celsius") {
        const toFahrenheit = (temp * 9) / 5 + 32;
        const toKelvin = temp + 273.15;
        result = `${temp}°C = ${toFahrenheit.toFixed(2)}°F, ${toKelvin.toFixed(2)}K`;
    } else if (selectedUnit === "fahrenheit") {
        const toCelsius = ((temp - 32) * 5) / 9;
        const toKelvin = ((temp - 32) * 5) / 9 + 273.15;
        result = `${temp}°F = ${toCelsius.toFixed(2)}°C, ${toKelvin.toFixed(2)}K`;
    } else if (selectedUnit === "kelvin") {
        const toCelsius = temp - 273.15;
        const toFahrenheit = (temp - 273.15) * 9 / 5 + 32;
        result = `${temp}K = ${toCelsius.toFixed(2)}°C, ${toFahrenheit.toFixed(2)}°F`;
    }

    // Display result
    resultDiv.textContent = result;
});
