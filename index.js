

document.addEventListener("DOMContentLoaded",function(){

    
    createGameBoard();
    createKeyBoard();
})


// To create board which has 5*6 squares to fill in letters
function createGameBoard(){

    const board = document.getElementById('gameboard');

    for(let i=0;i<6;i++){
        const row = document.createElement('div');
        row.classList.add('squaresRow');
        for(j=0;j<5;j++){
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        gameboard.appendChild(row);
    }

}

function createKeyBoard(){

    const keyboard = document.getElementById('keyboard');
    let keyboardArray = ['q','w','e','r','t','y','u','i','o','p'];
    console.log(keyboardArray.length);
    for (let i=0;i<3;i++){
        const keyboardRow = document.createElement('div');
        keyboardRow.classList.add('keyboardRow');
        for (let j=0;j<keyboardArray.length;j++){
            const key = document.createElement('button');
            key.classList.add('key');
            key.textContent = keyboardArray[j];
            keyboardRow.appendChild(key);
        }
        keyboard.appendChild(keyboardRow);
    
    }
    
}