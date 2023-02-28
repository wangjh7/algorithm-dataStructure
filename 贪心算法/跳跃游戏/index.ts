function canJump(nums: number[]): boolean {
  let cover:number = 0
  if(nums.length == 1) return true
  for(let i = 0; i <= cover; i++){
    cover = Math.max(i+nums[i],cover)
    if(cover >= nums.length - 1) return true
  }
  return false
};
canJump([2,3,1,1,4])