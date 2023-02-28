document.addEventListener("DOMContentLoaded",function(){
    
    
// To create board which has 5*6 squares to fill in letters

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
})

