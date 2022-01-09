import Hangman from './hangman';
import getPuzzle from './requests';

const puzzleElement = document.querySelector('#puzzle');
const guessElement = document.querySelector('#guess');
let gameOne;

window.addEventListener('keypress', function(e) {
    const guess = String.fromCharCode(e.charCode);
    gameOne.guessMaking(guess);
    render();
});

const render = () => {
    puzzleElement.innerHTML = '';
    guessElement.textContent = gameOne.statusMsg;

    gameOne.puzzle.split('').forEach((letter) => {
        const letterElement = document.createElement('span');
        letterElement.textContent = letter;
        puzzleElement.appendChild(letterElement);
    });
}

const startGame = async () => {
    const puzzle = await getPuzzle('2');
    gameOne = new Hangman(puzzle, 5);
    render();
} 

document.querySelector('#reset').addEventListener('click', startGame);

startGame();