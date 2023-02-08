function combinationSum(candidates: number[], target: number): number[][] {
  const result:number[][] = []
  const path:number[] = []
  candidates.sort((a,b)=>a-b) // 剪枝
  function backtracking(candidates:number[],target:number,sum:number,startIndex:number):void{
    // if(sum > target){
    //   return 
    // }
    if(sum == target){
      result.push(path.slice())
      return 
    }

    for(let i = startIndex; i < candidates.length && sum+candidates[i] <= target; i++){ //剪枝
      sum += candidates[i]
      path.push(candidates[i])
      backtracking(candidates,target,sum,i) // 关键点:不用i+1了，表示可以重复读取当前的数
      sum -= candidates[i] //回溯
      path.pop() //回溯
    }
  }
  backtracking(candidates,target,0,0)
  return result
};