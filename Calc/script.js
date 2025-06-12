function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Keyboard support
document.addEventListener("keydown", function (event) {
  const key = event.key;
  const allowedKeys = "0123456789+-*/.";

  if (allowedKeys.includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    event.preventDefault(); // Prevent form submission if inside a form
    calculate();
  } else if (key === "Backspace") {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  } else if (key === "Escape") {
    clearDisplay();
  }
});
