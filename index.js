

document.addEventListener("DOMContentLoaded",function(){

    
    createGameBoard();
    createKeyBoard();
    const key = document.querySelectorAll('button');
    // const square = document.querySelector('.square');
    key.forEach(element => {
        element.addEventListener('click',function(e){
           
            let letter = e.target;
            console.log(letter.textContent);
            let square = document.querySelector('.squaresRow');
            console.log(square);
            square.firstChild.textContent = letter.textContent;
            
        })

    });
   
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
    let keyboardArray = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','del','z','x','c','v','b','n','m','enter'];
          
        for (i=0;i<keyboardArray.length;i++){
            const key = document.createElement('button');
            key.classList.add('key');
            key.textContent = keyboardArray[i];
            keyboard.appendChild(key);
        }
    }
