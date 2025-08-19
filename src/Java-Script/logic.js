const display = document.getElementById("display");

const appendToDisplay = (value) => {
  display.value += value;
};

const clearDisplay = () => (display.value = "");
const deleteLastCharacter = () => (display.value = display.value.slice(0, -1));

document.querySelectorAll(".calculator__key").forEach((btn) => {
  const value = btn.textContent.trim();

  if (value === "CE") {
    btn.addEventListener("click", clearDisplay);
  } else if (value === "=") {
  } else if (value === "") {
  } else {
    btn.addEventListener("click", () => appendToDisplay(value));
  }
});
