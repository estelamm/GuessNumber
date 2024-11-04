const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

const statusTitle =  document.getElementById('status');
const attempt = document.getElementById('attempt');
const result = document.getElementById('result');
const inputValue = document.getElementById('kick');
const btnRestart = document.getElementById('btn-restart');

const GuessNumber = {
    max: 10,
    attemptsNumber: 0,
    numberDraw: function(){
        return Math.round(Math.random() * this.max);
    },
    showButtonRestart: function() {
        btnRestart.style.display = 'flex';
    },
    clearInput: function() {
        inputValue.value = '';
    },
    updateAttempt: function(value) {
        attempt.innerHTML = value;
    },
    correctAnswer: function() {
        this.showButtonRestart();
        statusTitle.innerHTML = 'Parabéns, você acertou! 🎉'
        statusTitle.classList.remove('incorrect-answer');
        statusTitle.classList.add('status-correct');

        result.classList.remove('result-box-default');
        result.classList.add('result-correct-answer');

        this.clearInput();
    },
    incorrectAnswer: function(message) {
        statusTitle.innerHTML = message;
        statusTitle.classList.add('incorrect-answer');

        this.clearInput();
    }
}

/*vai receber um nº aleatorio de 1 a 10: */
const numberDraw = GuessNumber.numberDraw();

function handleSubmit(e) {
    e.preventDefault();

    const kick = inputValue.value;

    if(!kick) {
        alert('Digite algum valor!');
        return;
    }

    GuessNumber.updateAttempt(++GuessNumber.attemptsNumber);

    if(numberDraw == kick) {
        GuessNumber.correctAnswer();
    }else if(numberDraw > kick){
        GuessNumber.incorrectAnswer('O número é maior!')
    } else if (numberDraw < kick){
        GuessNumber.incorrectAnswer('O número é menor!')
    }
};

function restartGame() {
    document.location.reload(true);
}