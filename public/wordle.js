var theWord;
var theWordLetters;
var theWordMap = new Map();
var guessCount = 0;

function randomWord() {
    theWord = words[Math.floor(Math.random() * words.length)];
    theWordLetters = theWord.split("");
    for(var i = 0; i < theWordLetters.length; i++) {
        theWordMap.set(i, theWordLetters[i]);
    }
    return theWord;
}

function getWord() {
    var input = document.getElementById('myGuess');
    input.addEventListener('keydown', function(e) {
        if(e.code === 'Enter') {
            testGuess();
        }
    })
    var selectedWord = randomWord();
    //document.getElementById('word').innerHTML = selectedWord;
}

function testGuess() {
    var guess = document.getElementById('myGuess').value.toLowerCase();

    if(guess.length != 5) {
        alert('Guess must be 5 letters, Boyle');
    }

    else if(!words.includes(guess)) {
        alert(guess.toUpperCase() + ' is not in the list of words');
    }


    else {

        var guessLetters = guess.split("");

        for(var i = 0; i < guessLetters.length; i++) {
            var letter = guessLetters[i];

            var letterPosition = theWord.indexOf(letter);

            var backgroundColor = 'gray';
            var fontColor = 'white';

            if(theWordMap.get(i) == letter) {
                backgroundColor = 'green';
            } else if(letterPosition > -1) {
                backgroundColor = 'yellow';
                fontColor = 'black';
            }

            var element = document.getElementById('g'+guessCount+'letter' + i);

            element.innerHTML = letter.toUpperCase();
            element.style.backgroundColor = backgroundColor;
            element.style.color = fontColor;
            document.getElementById(letter).style.backgroundColor = 'white';
        }
        

        if(theWord == guess) {
            document.getElementById('result').innerHTML = 'Winner, the word was ' + theWord;
            document.getElementById('body').style.backgroundColor = 'green';
            resetLetterBackgrounds();
            return;
        } else {
            document.getElementById('result').innerHTML = 'Try Again';
        }

        if(++guessCount > 5) {
            document.getElementById('body').style.backgroundColor = 'red';
            document.getElementById('result').innerHTML = 'You lose, Kelly. The word was "' + theWord.toUpperCase() + '"';
            resetLetterBackgrounds();
        }
    }

    document.getElementById('myGuess').value = "";
}

function resetLetterBackgrounds() {
    for (var i = 97; i <= 122; i++) {
        document.getElementById(String.fromCharCode(i)).style.backgroundColor = 'black';
    }
}