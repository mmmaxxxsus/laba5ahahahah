const textDisplay = document.getElementById('text-display');
const textInput = document.getElementById('text-input');
const resultDisplay = document.getElementById('result');
const sampleText = "Швидкий бурий лис стрибає через лінивого пса.";

let startTime;

function startGame() {
    textDisplay.innerText = sampleText;
    textInput.value = '';
    textInput.disabled = false;
    textInput.focus();
    startTime = new Date();
}

textInput.addEventListener('input', () => {
    if (textInput.value === sampleText) {
        const endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000; // у секундах
        const words = sampleText.split(' ').length;
        const wpm = Math.round((words / timeTaken) * 60);

        resultDisplay.innerText = `WPM: ${wpm} (Час: ${timeTaken}с)`;
        textInput.disabled = true;
    }
});
