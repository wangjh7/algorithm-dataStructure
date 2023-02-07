function combinationSum3(k: number, n: number): number[][] {
  const result:number[][] = []
  const path:number[] = []
  function backtracking(targetSum:number,k:number,sum:number,startIndex:number):void{
    if(path.length == k){
      if(sum == targetSum) result.push(path.slice())
      return 
    }

    for(let i = startIndex; i <= 9 ; i++){
      sum += i
      path.push(i)
      backtracking(targetSum,k,sum,i+1)
      sum -= i
      path.pop()
    }
  }
  backtracking(n,k,0,1)
  return result
};

//剪枝优化
function combinationSum3(k: number, n: number): number[][] {
  const result:number[][] = []
  const path:number[] = []
  function backtracking(targetSum:number,k:number,sum:number,startIndex:number):void{
    if (sum > targetSum) { // 剪枝操作
      return;
    }
    if(path.length == k){
      if(sum == targetSum) result.push(path.slice())
      return 
    }

    for(let i = startIndex; i <= 9 - (k - path.length) + 1 ; i++){ //剪枝操作
      sum += i
      path.push(i)
      backtracking(targetSum,k,sum,i+1)
      sum -= i
      path.pop()
    }
  }
  backtracking(n,k,0,1)
  return result
}