const checkSeq = (opt1, opt2, opt3) => {
    return opt1 === opt2 === opt3
};

export const checkWinner = (board) => {
    
    // win conditions

    // row
    for(let i = 0; i < 9; i += 3){
        if(checkSeq(board[i] === board[i+1] && board[i+2])){
            console.log("we have a winner!!!")
            return true
        }
    }

    // column
    for(let i = 0; i < 3; i +=1){
        if(checkSeq(board[i] === board[i+4] && board[i+6])){
            console.log("we have a winner!!!")
            return true
        }
    }

    // diagonals
        if(board[0] === board[4] && board[4] === board[8]) {
            console.log("we have a winner!!!")
            return true
        }
        if(board[2] === board[4] && board[4] === board[6]) {
            console.log("we have a winner!!!")
            return true
        }
        // if(board[3] === board[4] && board[4] === board[5]) {
        //     console.log("we have a winner!!!")
        //     return true
        // }
        // if(board[6] === board[7] && board[7] === board[8]) {
        //     console.log("we have a winner!!!")
        //     return true
        // }
        // if(board[0] === board[1] && board[1] === board[2]) {
        //     console.log("we have a winner!!!")
        //     return true
        // }
        // if(board[2] === board[5] && board[5] === board[8]) {
        //     console.log("we have a winner!!!")
        //     return true
        // }
        // if(board[0] === board[3] && board[3] === board[6]) {
        //     console.log("we have a winner!!!")
        //     return true
        // }
        // if(board[1] === board[4] && board[4] === board[7]) {
        //     console.log("we have a winner!!!")
        //     return true
        // }
}