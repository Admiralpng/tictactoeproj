const checkSeq = (opt1, opt2, opt3) => {
    return opt1 !== null && opt1 !== undefined && opt1 !== "" && opt1 === opt2 && opt2 === opt3;
};

export const checkWinner = (board) => {
    
    // win conditions

    // row
    for(let i = 0; i < 9; i += 3){
        if(checkSeq(board[i], board[i+1], board[i+2])){
            return true
        }
    }

    // column
    for(let i = 0; i < 3; i +=1){
        if(checkSeq(board[i], board[i+3], board[i+6])){
            return true
        }
    }

    // diagonals
    if(checkSeq(board[0], board[4], board[8])) {
        return true
    }
    if(checkSeq(board[2], board[4], board[6])) {
        return true
    }

    // draw: no empty cells left (empty cells hold their original number)
    if(!board.some(cell => typeof cell === "number")){
        return "draw"
    }
}
