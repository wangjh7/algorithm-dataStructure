function solveNQueens(n: number): string[][] {
  const result:string[][] = []
  const chessboard:string[][] = []
  for(let i = 0; i < n; i++){[
    chessboard[i] = new Array(n).fill(".")
  ]}
  function backtracking(n:number,row:number,chessboard:string[][]):void{
    if(row == n) {
      result.push(transformBoard(chessboard))
      return
    }
    for(let col = 0; col < n; col++){
      if(isValid(row,col,chessboard,n)){ //验证合法就可以放
        chessboard[row][col] = "Q"
        backtracking(n,row+1,chessboard)
        chessboard[row][col] = "."
      }
    }
  }
  backtracking(n,0,chessboard)
  return result
};

function transformBoard(board: string[][]): string[] {
  const resArr = []
  for(let row of board){
    resArr.push(row.join(""))
  }
  return resArr
}

function isValid(row:number,col:number,chessboard:string[][],n:number):boolean{
  //检查列
  for(let i = 0; i < row; i++){
    if(chessboard[i][col] == "Q"){
      return false
    }
  }
  //检查45度角是否有皇后
  for(let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--){
    if(chessboard[i][j] == "Q"){
      return false
    }
  }
  //检查135度角是否有皇后
  for(let i = row - 1, j = col + 1; i >= 0 && j <= n - 1; i--, j++){
    if(chessboard[i][j] == "Q"){
      return false
    }
  }
  return true
}