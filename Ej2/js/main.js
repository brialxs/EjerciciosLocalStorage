const inputText = document.getElementById("inputText");
const buttonText = document.getElementById("buttonText");

buttonText.addEventListener("click", () => {
    if (inputText.value) {
        localStorage.setItem("example", inputText.value);
    } else {
        localStorage.removeItem("example")
    }
});