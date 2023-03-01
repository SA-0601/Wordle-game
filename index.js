import { words } from "./words.js";
let guessedwords = [[]];
let availableSpace = 1;


    
let word = words[Math.floor(Math.random() * words.length)];
console.log(word);
console.log(words[0]);
document.addEventListener("DOMContentLoaded",function(){

    createGameBoard();
    createKeyBoard();
    const key = document.querySelectorAll('button');
    
    key.forEach(element => {
        element.addEventListener('click',function(e){
            
            let letter = e.target.textContent;
            if (letter === "del") {
                deleteLetter();
                return;
            }else if (letter === "enter") {
                checkGuessWord();
                return;
            } else 
            updateGuessedWords(letter);            
        })
    });
})

function deleteLetter(){
    const currentWordArr = getCurrentWordArray();
    const removedLetter = currentWordArr.pop();

    guessedwords[guessedwords.length-1] = currentWordArr;
    const lastLetterEl = document.getElementById(availableSpace-1);
    lastLetterEl.textContent = '';
    availableSpace -= 1;
}

function checkGuessWord(){
    const currentWordArr = getCurrentWordArray();
    if(currentWordArr.length !== 5){
    window.alert("Word should be of 5 letters")
    return;
    }

    const currentWord = currentWordArr.join('');
    if(currentWord === word){
        window.alert("congratulations")
        
    }
    if(!words.includes(currentWord)){
    
        alert('Word entered is not in list');
        return;
    }
    

    if(guessedwords.length === 6){
        window.alert(`You have no more guesses left, Word is ${word}`);
    }
    guessedwords.push([]);
    console.log(guessedwords);


}

function getCurrentWordArray(){
    const numberOfGuessedWords = guessedwords.length;
    return guessedwords[numberOfGuessedWords - 1];
}
function updateGuessedWords(letter){
    const currentWordArr = getCurrentWordArray();

    if(currentWordArr && currentWordArr.length < 5){
        currentWordArr.push(letter);
        const availableSpaceElement = document.getElementById(availableSpace);
        availableSpaceElement.textContent = letter;
        availableSpace += 1;
    }
        
}

// To create board which has 5*6 squares to fill in letters
function createGameBoard(){

    const board = document.getElementById('gameboard');

    for(let i=0;i<30;i++){
            const square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute('id',i+1);
            board.appendChild(square);
    }
}

function createKeyBoard(){
    const keyboard = document.getElementById('keyboard');
    let keyboardArray = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','del','z','x','c','v','b','n','m','enter'];
          
        for (let i=0;i<keyboardArray.length;i++){
            const key = document.createElement('button');
            key.classList.add('key');
            //Assigning id same as keyvalue
            key.setAttribute('id',`${keyboardArray[i]}`);
            key.textContent = keyboardArray[i];
            keyboard.appendChild(key);
        }
    }
