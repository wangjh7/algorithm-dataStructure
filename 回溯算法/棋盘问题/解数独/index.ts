function solveSudoku(board: string[][]): void {
  backtracking(board)
  function backtracking(board:string[][]):boolean{
    for(let i = 0; i < board.length; i++){ //遍历行
      for(let j = 0; j < board[0].length; j++){ //遍历列
        if(board[i][j] != ".") continue
        for(let k = 1; k <= 9; k++){ //(i,j)这个位置放k是否合适
          if(isValid(i,j,`${k}`,board)){
            board[i][j] = k+"" //放置k
            if(backtracking(board)) return true //如果找到合适的一组 立刻返回
            board[i][j] = "." //回溯
          }
        }
        return false //9个数都试完了 都不行 那么就返回false
      }
    }
    return true //遍历完没有返回false 说明找到合适的棋盘位置了
  }

  function isValid(row:number,col:number,val:string,board:string[][]):boolean{
    for(let i = 0; i < 9; i++){ //判断行里是否重复
      if(board[row][i] == val){
        return false
      }
    }

    for(let j = 0; j < 9; j++){ //判断列里是否重复
      if(board[j][col] == val){
        return false
      }
    }

    const startRow = Math.floor(row / 3) * 3
    const startCol = Math.floor(col / 3) * 3
    for(let i = startRow; i < startRow + 3; i++){
      for(let j = startCol; j < startCol + 3; j++){
        if(board[i][j] == val){
          return false
        }
      }
    }
    return true
  }
};