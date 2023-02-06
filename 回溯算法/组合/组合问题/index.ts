function combine(n: number, k: number): number[][] {
  const result:number[][] = []
  const path:number[] = []
  function backtracking(n:number,k:number,startIndex:number){
    if(path.length == k){
      result.push(path.slice())
      return
    }
    for(let i = startIndex; i <= n; i++){ //控制树的横向遍历
      path.push(i) //处理节点
      backtracking(n,k,i+1) //递归：控制树的纵向遍历，注意下一层的startIndex为i+1
      path.pop() //回溯，撤销处理的节点
    }
  }
  backtracking(n,k,1)
  return result
};

//剪枝优化
function combine(n: number, k: number): number[][] {
  const result:number[][] = []
  const path:number[] = []
  function backtracking(n:number,k:number,startIndex:number){
    if(path.length == k){
      result.push(path.slice())
      return
    }
    for(let i = startIndex; i <= n - (k - path.length) + 1; i++){ //剪枝优化
      path.push(i)
      backtracking(n,k,i+1)
      path.pop()
    }
  }
  backtracking(n,k,1)
  return result
};