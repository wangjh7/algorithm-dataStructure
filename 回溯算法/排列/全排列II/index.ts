function permuteUnique(nums: number[]): number[][] {
  const result:number[][] = []
  const path:number[] = []
  function backtracking(nums:number[],used:boolean[]):void{
    if(path.length == nums.length){
      result.push(path.slice())
      return
    }

    for(let i = 0; i< nums.length; i++){
      // used[i - 1] == true，说明同一树枝nums[i - 1]使用过
      // used[i - 1] == false，说明同一树层nums[i - 1]使用过 
      // 如果同一树层nums[i - 1]使用过则直接跳过
      if(i > 0 && nums[i] == nums[i-1] && used[i-1] == false){
        continue
      }
      if(used[i] == false){
        used[i] = true
        path.push(nums[i])
        backtracking(nums,used)
        path.pop()
        used[i] = false
      }
    }
  }
  nums.sort((a,b)=>a-b)
  const used:boolean[] = new Array(nums.length).fill(false)
  backtracking(nums,used)
  return result
};