function permute(nums: number[]): number[][] {
  const result:number[][] = []
  const path:number[] = []
  function backtracking(nums:number[],used:boolean[]):void{
    //此时说明找到了一组
    if(path.length == nums.length){
      result.push(path.slice())
      return
    }

    for(let i = 0; i < nums.length; i++){
      if(used[i] == true) continue
      used[i] = true
      path.push(nums[i])
      backtracking(nums,used)
      path.pop()
      used[i] = false
    }
  }

  const used:boolean[] = new Array(nums.length).fill(false)
  backtracking(nums,used)
  return result
};