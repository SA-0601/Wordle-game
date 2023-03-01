

document.addEventListener("DOMContentLoaded",function(){

    
    createGameBoard();
    createKeyBoard();
    const key = document.querySelectorAll('button');
    // const square = document.querySelector('.square');
    key.forEach(element => {
        element.addEventListener('click',function(e){
           
            let letter = e.target;
            console.log(letter.textContent);
            let square = document.getElementById('1');
            console.log(square);
            square.textContent = letter.textContent;
        })
    });
   
})


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
          
        for (i=0;i<keyboardArray.length;i++){
            const key = document.createElement('button');
            key.classList.add('key');
            //Assigning id same as keyvalue
            key.setAttribute('id',`${keyboardArray[i]}`);
            key.textContent = keyboardArray[i];
            keyboard.appendChild(key);
        }
    }
