function subsets(nums: number[]): number[][] {
  const result:number[][] = []
  const path:number[] = []
  function backtracking(nums:number[],startIndex:number):void{
    result.push(path.slice())
    if(startIndex >= nums.length){
      return
    }
    for(let i = startIndex; i < nums.length; i++){
      path.push(nums[i])
      backtracking(nums,i+1)
      path.pop()
    }
  }
  backtracking(nums,0)
  return result
};
subsets([1,2,3])