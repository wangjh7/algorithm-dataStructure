function largestSumAfterKNegations(nums: number[], k: number): number {
  nums.sort((a,b)=>Math.abs(b) - Math.abs(a))
  let curIndex:number = 0
  const length = nums.length
  while(curIndex < length && k > 0){
    if(nums[curIndex] < 0){
      nums[curIndex] *= -1
      k--
    }
    curIndex++
  }
  while(k > 0){
    nums[length-1] *= -1
    k--
  }
  return nums.reduce((pre,cur)=>pre+cur,0)
};