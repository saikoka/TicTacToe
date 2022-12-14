let p1Turn = true; //p1 is circle, p2 is x 
const boardArray = [["", "", ""], ["","",""], ["","",""]];
let turns = 0; 
document.addEventListener("click", (e)=>{
    if(e.target.matches(".tile")){
        if(e.target.innerHTML.length === 0){
            if(p1Turn){
                e.target.innerHTML = "O";
            }
            else{
                e.target.innerHTML = "X";
            }
            
            updateBoard(e.target.id);
            
        }
    }
});

const updateBoard = (id) =>{
    const numKey = parseInt(id);
    const currRow = Math.floor(numKey/3);
    const currCol = numKey % 3;
    p1Turn ? boardArray[currRow][currCol] = "O" : "X";
    checkWinner(currRow, currCol);

}

const checkWinner = (row, col) =>{
    //At each selection, check if that selection gets a winner, or fills the board entirely.
    let counter = 0
    for(const i of boardArray[row] ){
        if(p1Turn){
            if(i==="O"){
                counter+=1;
            }
        }
        else{
            if(i==="X"){
                counter+=1;
            }
        }
        
    }

    if(counter ===3){
        if(p1Turn){
            window.alert("PLAYER 1 WONNERED!");
        }
        else{
            window.alert("PLAYER 2 WONNERED!");
        }
    }

    counter = 0;
    for(let i = 0 ; i<boardArray.length;i++){
        if(p1Turn){
            if(boardArray[i][col]==="O"){
                counter+=1;
            }
        }
        else{
            if(boardArray[i][col]==="X"){
                counter+=1;
            }
        }
        
    }
    if(counter ===3){
        if(p1Turn){
            window.alert("PLAYER 1 WONNERED!");
        }
        else{
            window.alert("PLAYER 2 WONNERED!");
        }
    }
    counter = 0;
    //check diagonal
    if(row===col || row === 0 && col === 2 || row === 2 && col ===0){
        //check backslash direction "\"
        for(let i = 0 ; i<3;i++){
            if(p1Turn){
                if(boardArray[i][i]==="O"){
                    counter+=1
                }
            }
            else{
                if(boardArray[i][i]==="X"){
                    counter+=1
                }
            }
            
        }
        
        if(counter ===3){
            if(p1Turn){
                window.alert("PLAYER 1 WONNERED!");
            }
            else{
                window.alert("PLAYER 2 WONNERED!");
            }
        }
        counter = 0;
        if(p1Turn){
            if(boardArray[2][0]==="O" && boardArray[0][2] ==="O" && boardArray[1][1]==="O"){
                window.alert("PLAYER 1 WONNERED!");
            }
        }
        else{
            if(boardArray[2][0]==="X" && boardArray[0][2] ==="X" && boardArray[1][1]==="X"){
                window.alert("PLAYER 2 WONNERED!");
            }
        }
    }
    
    if(turns===8){
        window.alert("TIE GAMEEE!!");
    }else{
        turns+=1;
        p1Turn = !p1Turn;
    }

    

}