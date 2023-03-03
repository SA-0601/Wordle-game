import { words } from "./words.js";
const keyClickSound = new Audio("keyClickSound.mp3");
let guessedwords = [[]];
let availableSpace = 1;
let avoidDeleteKey = 0;

    
let word = words[Math.floor(Math.random() * words.length)];
console.log(word);
console.log(words[0]);
document.addEventListener("DOMContentLoaded",function(){

    createGameBoard();
    createKeyBoard();
    const key = document.querySelectorAll('button');
    
    key.forEach(element => {
        element.addEventListener('click',function(e){
            keyClickSound.play();
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

    // if we want to delete when nothing is there on row
    if(lastLetterEl === null){
        window.alert('No more letters to delete');
        return;
    }else

    lastLetterEl.textContent = '';
    availableSpace -= 1;
    avoidDeleteKey -=1;
}

function checkGuessWord(){
    const currentWordArr = getCurrentWordArray();
    console.log(currentWordArr);
    if(currentWordArr.length !== 5){
    window.alert("Word should be of 5 letters")
    return;
    }

    const currentWord = currentWordArr.join('');
    console.log(currentWord);
    
    if(!words.includes(currentWord)){
    
        alert('Word entered is not in list');
        return;
    }

    // for adding colors to letters based on their presence
    let index=availableSpace-5;
    
    for(let i=0;i<5;i++){
        setTimeout(function() {
        const letterOnGrid = document.getElementById(index);
        console.log(letterOnGrid);
        let char = letterOnGrid.textContent;
        console.log(word[i]);
        if(char == word[i]){
            
            letterOnGrid.classList.add('green');
            
        }else if (word.includes(char)){
                letterOnGrid.classList.add('yellow');
              } else
                letterOnGrid.classList.add('gray');
                index += 1;
                console.log(char);
        }, i * 500);
        avoidDeleteKey = 0;
        
    }

    if(currentWord === word){
        window.alert("Congratulations, You win the game");
        const body = document.querySelector('body');
        body.classList.add('fireworks');
        
        
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
        avoidDeleteKey +=1;
        console.log(avoidDeleteKey);
        
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
