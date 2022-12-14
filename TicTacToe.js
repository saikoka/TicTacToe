let p1Turn = true; //p1 is circle, p2 is x 
const boardArray = [["", "", ""], ["","",""], ["","",""]];
let turnCount = 0; //Used to detect if there's a tie.  

const modal = document.querySelector("#modal");
const textDiv = document.querySelector("#text-div");
console.log(modal);
document.addEventListener("click", (e)=>{
    if(e.target.matches(".tile")){
        if(e.target.innerText.length === 0){
            if(p1Turn){
                e.target.innerText = "O";
            }
            else{
                e.target.innerText = "X";
            }
            
            updateBoard(e.target.id);
        }
        return;
    }


    if(e.target.matches("#close-btn") || e.target.matches("#play-again-btn")){
        modal.close();
    }

    if(e.target.matches("#play-again-btn") || e.target.matches("#reset")){
        location.reload();
    }
});

const updateBoard = (id) =>{
    const numKey = parseInt(id);
    const currRow = Math.floor(numKey/3);
    const currCol = numKey % 3;
    boardArray[currRow][currCol] = p1Turn ? "O" : "X";
    turnCount++;
    checkWinner(currRow, currCol);
}

const checkWinner = (row, col) =>{
    //Querying specific rol/col indicies for a potential winner. 
    const rowWin = boardArray[row][0] === (p1Turn ? "O" : "X") && boardArray[row][1] === (p1Turn ? "O" : "X") && boardArray[row][2] === (p1Turn ? "O" : "X");
    const colWin = boardArray[0][col] === (p1Turn ? "O" : "X") && boardArray[1][col] === (p1Turn ? "O" : "X") && boardArray[2][col] === (p1Turn ? "O" : "X");
    const diagWin1 = boardArray[0][0] === (p1Turn ? "O" : "X") && boardArray[1][1] === (p1Turn ? "O" : "X") && boardArray[2][2] === (p1Turn ? "O" : "X");
    const diagWin2 = boardArray[0][2] === (p1Turn ? "O" : "X") && boardArray[1][1] === (p1Turn ? "O" : "X") && boardArray[2][0] === (p1Turn ? "O" : "X");

    const winner = rowWin || colWin || diagWin1 || diagWin2;
    if(winner){
        announceWinner();
    }
 
    
    if(!winner && turnCount===9){
        announceWinner(true);
    }else{
        p1Turn = !p1Turn;
    }
}

const announceWinner = (tie) =>{
    const winner = tie? "TIE GAME!" : p1Turn ? "Player 1 won!" : "Player 2 Won";
    const modalText = document.createElement("p");
    modalText.textContent=winner;
    modalText.id = "modal-text"
    textDiv.append(modalText);
    modal.showModal();
}


