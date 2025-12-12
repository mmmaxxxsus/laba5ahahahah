const textDisplay = document.getElementById('text-display');
const textInput = document.getElementById('text-input');
const sampleText = "Швидкий бурий лис стрибає через лінивого пса.";

function startGame() {
    textDisplay.innerText = sampleText;
    textInput.disabled = false;
    textInput.focus();
}

textInput.addEventListener('input', () => {
    if (textInput.value === sampleText) {
        alert("Тест завершено!");
        textInput.disabled = true;
    }
});
