let display = document.getElementById("display");

function appendValue(value) {
    if (display.textContent === "0" && value !== ".") {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function clearDisplay() {
    display.textContent = "0";
}

function deleteLast() {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = "0";
    }
}

function calculateResult() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = "Error";
    }
}
