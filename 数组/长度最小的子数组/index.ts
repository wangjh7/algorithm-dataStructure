//滑动窗口
function minSubArrayLen(target: number, nums: number[]): number {
  let result:number = nums.length + 1
  let sum:number = 0 //滑动窗口之和
  let left:number = 0 //滑动窗口起始位置
  let subLength:number = 0 //滑动窗口长度
  for(let right = 0; right < nums.length; right++){
    sum += nums[right]
    while(sum >= target){ //滑动窗口之和 大于 target
      subLength = (right - left) + 1 //子数组的长度
      result = result < subLength ? result : subLength
      sum -= nums[left++]
    }
  }
  //如果result没有被赋值的话 就返回0 否则返回result
  return result === nums.length + 1 ? 0 : result
};