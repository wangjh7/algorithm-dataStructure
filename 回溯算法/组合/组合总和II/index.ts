function combinationSum2(candidates: number[], target: number): number[][] {
  const result:number[][] = []
  const path:number[] = []
  candidates.sort((a,b)=>a-b)
  const used:boolean[] = new Array(candidates.length).fill(false)
  function backtracking(candidates:number[],target:number,sum:number,startIndex:number,used:boolean[]){
    // if(sum > target) return 
    if(sum == target) {
      result.push(path.slice())
      return
    }

    for(let i = startIndex; i < candidates.length && sum + candidates[i] <= target; i++){
      //used[i - 1] == true 说明同一树枝candidates[i - 1]使用过
      //used[i - 1] == false 说明同一树层candidates[i - 1]使用过
      //要对同一树层使用过的元素进行跳过
      if(i> 0 && candidates[i] == candidates[i - 1] && used[i - 1] == false){
        continue
      }
      sum += candidates[i]
      path.push(candidates[i])
      used[i] = true
      backtracking(candidates,target,sum,i+1,used)
      used[i] = false
      path.pop()
      sum -= candidates[i]
    }
  }
  backtracking(candidates,target,0,0,used)
  return result
};

// combinationSum2([10,1,2,7,6,1,5],8)

//使用startIndex去重
function combinationSum2(candidates: number[], target: number): number[][] {
  const result:number[][] = []
  const path:number[] = []
  candidates.sort((a,b)=>a-b)
  const used:boolean[] = new Array(candidates.length).fill(false)
  function backtracking(candidates:number[],target:number,sum:number,startIndex:number,used:boolean[]){
    // if(sum > target) return 
    if(sum == target) {
      result.push(path.slice())
      return
    }

    for(let i = startIndex; i < candidates.length && sum + candidates[i] <= target; i++){
      // 要对同一树层使用过的元素进行跳过
      if (i > startIndex && candidates[i] == candidates[i - 1]) {
        continue;
      }
      sum += candidates[i]
      path.push(candidates[i])
      used[i] = true
      backtracking(candidates,target,sum,i+1,used)
      used[i] = false
      path.pop()
      sum -= candidates[i]
    }
  }
  backtracking(candidates,target,0,0,used)
  return result
};