class Hangman {
    constructor(word, guesses) {
        this.word = word.toLowerCase().split('');
        this.guesses = guesses;
        this.guessedLetters = [];
        this.status = 'playing';
    }
    // create a function to recalculate status 
    setStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ');

        if (this.guesses === 0) {
            this.status = 'failed';
        } else if (finished) {
            this.status = 'finished';
        } else {
            this.status = 'playing';
        }
    }
    // create a function to show a message after finishing the game
    get statusMsg() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.guesses}`;
        } else if (this.status === 'finished') {
            return `Great Work! You guessed the word`;
        } else {
            return `Nice try! the word was ${this.word.join('')}`;
        }
    }
    // create a function to check the puzzle and return the result of guess
    get puzzle() {
        let puzzle = '';
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter;
            } else {
                puzzle += '*';
            }
        });
        return puzzle;
    }
    // create a function to make a guess and provide to the guess list
    guessMaking(guess) {
        guess = guess.toLowerCase();
        const isUnique = !this.guessedLetters.includes(guess);
        const isBadGuess = !this.word.includes(guess);

        if (this.status !== 'playing') {
            return;
        }

        if (isUnique) {
            this.guessedLetters.push(guess);
        }

        if (isUnique && isBadGuess) {
            this.guesses--;
        }
        this.setStatus();
    }
}

export {Hangman as default}