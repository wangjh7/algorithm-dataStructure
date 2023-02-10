function subsetsWithDup(nums: number[]): number[][] {
  const result:number[][] = []
  const path:number[] = []
  nums.sort((a,b)=>a-b)
  const used:boolean[] = new Array(nums.length).fill(false)

  function backtracking(nums:number[],startIndex:number,used:boolean[]):void{
    result.push(path.slice())
    for(let i = startIndex; i < nums.length; i++){
      // used[i - 1] == true，说明同一树枝candidates[i - 1]使用过
      // used[i - 1] == false，说明同一树层candidates[i - 1]使用过
      // 而我们要对同一树层使用过的元素进行跳过
      if(i > 0 && nums[i] == nums[i-1] && used[i-1] == false){
        continue
      }
      path.push(nums[i])
      used[i] = true
      backtracking(nums,i+1,used)
      used[i] = false
      path.pop()
    }
  }
  backtracking(nums,0,used)
  return result
};
subsetsWithDup([1,2,2])