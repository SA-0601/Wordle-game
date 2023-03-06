import { words } from "./words.js";
const keyClickSound = new Audio("./files/keyClickSound.mp3");
const winSound = new Audio("./files/winSound.mp3");
const SoundGreen = new Audio("./files/SoundGreen.mp3");
const SoundGrayOrange = new Audio("./files/SoundGrayOrange.mp3");

//this is array for storing all the letters of the current word
let currentWordArr = [];

//this variable is to check on which space will next letter go
let availSpace = 1;

//avoidDeleteKey variable is to check for deletion before that particular row
let avoidDeleteKey = 0;

//Selecting random word from words.js file
let word = words[Math.floor(Math.random() * words.length)];

console.log(word);

document.addEventListener("DOMContentLoaded",function() {
  createGameBoard();
  createKeyBoard();

  const key = document.querySelectorAll(".key");

  key.forEach((element) => {
    element.addEventListener("click", function (e) {
      keyClickSound.play();
      let letter = e.target.textContent;

      if (letter === "del") {
        deleteLetter();
        return;
      } else if (letter === "enter") {
        checkGuessedWord();
        return;
      } else insertLetter(letter);
    });
  });
}
);

function deleteLetter() {
  
  const removedLetter = currentWordArr.pop();
  const lastLetterEl = document.getElementById(availSpace - 1);

  // if we want to delete when nothing is there on row
  if (lastLetterEl === null || avoidDeleteKey === 0) {
    window.alert("No more letters to delete");
    return;
  } else lastLetterEl.textContent = "";
  availSpace -= 1;
  avoidDeleteKey -= 1;
}

function checkGuessedWord() {
  
  console.log(currentWordArr);
  if (currentWordArr.length !== 5) {
    window.alert("Word should be of 5 letters");
    return;
  }
  const currentWord = currentWordArr.join("");
  console.log(currentWord);

  if (!words.includes(currentWord)) {
    alert("Word entered is not in list");
    return;
  }

  // for adding colors to letters based on their presence
  let index = availSpace - 5;

  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      const letterOnGrid = document.getElementById(index);
      
      console.log(letterOnGrid);
      let char = letterOnGrid.textContent;
      console.log(char);
      const letterOnKeyboard = document.getElementById(char);
      console.log(letterOnKeyboard);
      console.log(word[i]);
      if (char == word[i]) {
        letterOnGrid.classList.add("green");
        letterOnKeyboard.classList.remove("yellow");
        letterOnKeyboard.classList.add("green");
        SoundGreen.play();
      } else if (word.includes(char)) {
            letterOnGrid.classList.add("yellow");
            letterOnKeyboard.classList.add("yellow");
            SoundGrayOrange.play();
            } else {
                    letterOnGrid.classList.add("gray");
                    letterOnKeyboard.classList.add("gray");
                    SoundGrayOrange.play();
                   }
      index += 1;
      console.log(char);
    }, i * 700);
   
    avoidDeleteKey = 0;
    console.log("while coloring change", +avoidDeleteKey);
  }
  currentWordArr = [];
  if (currentWord === word) {
    const body = document.querySelector("body");
    body.classList.add("fireworks");
    setTimeout(function () {
      winSound.play();
    }, 3500);
  }else if (availSpace === 31) {
    setTimeout(function () {
        window.alert(`You have no more guesses left, Word is ${word}`);
      },3000);
    
  }
}

function insertLetter(letter) {
  
  if (currentWordArr && currentWordArr.length < 5) {
    currentWordArr.push(letter);
    const availSpaceEl = document.getElementById(availSpace);
    availSpaceEl.textContent = letter;
    availSpace += 1;
    avoidDeleteKey += 1;
  }
}

// To create game board which has 5*6 squares to fill in letters
function createGameBoard() {
  const board = document.getElementById("gameboard");

  for (let i = 0; i < 30; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("id", i + 1);
    board.appendChild(square);
  }
}

//To create keyboard thru DOM and assign classes
function createKeyBoard() {
  const keyboard = document.getElementById("keyboard");
  let keyboardArray = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","del","z","x","c","v","b","n","m","enter"];

  for (let i = 0; i < keyboardArray.length; i++) {
    const key = document.createElement("button");
    key.classList.add("key");
    //Assigning id same as keyvalue
    key.setAttribute("id", `${keyboardArray[i]}`);
    key.textContent = keyboardArray[i];
    keyboard.appendChild(key);
  }
}

//To Generate A New Game
const newgameBtn = document.getElementById("newgame");
newgameBtn.addEventListener("click", () => {
  window.location.reload();
});

// To open the rules window
const rulesBtn = document.getElementById("rules");
rulesBtn.addEventListener("click", () => {
    window.open("./files/WordleRules.png", "myWindow", "width=532,height=478");
    myWindow.close(); 
});
