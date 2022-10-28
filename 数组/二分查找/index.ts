function search(nums:number[],target:number):number{
  let mid:number
  let left: number = 0
  // right是数组最后一个数的下标，num[right]在查找范围内，是左闭右闭区间
  let right:number = nums.length - 1
  // 当left=right时，由于nums[right]在查找范围内，所以要包括此情况
  while(left <= right){
    //位运算 防止大数溢出 位运算往右移动一位等于除以2
    mid = left + ((right - left) >> 1)
    // 如果中间数大于目标值，要把中间数排除查找范围，所以右边界更新为mid-1；如果右边界更新为mid，那中间数还在下次查找范围内
    if(nums[mid] > target){
      right = mid - 1 // 去左面闭区间寻找
    } else if(nums[mid] < target) {
      left = mid + 1 // 去右面闭区间寻找
    } else {
      return mid
    }
  } 
  return -1
}

function search1(nums:number[],target:number):number{
  let mid:number
  let left:number = 0
  // right是数组最后一个数的下标+1，nums[right]不在查找范围内，是左闭右开区间
  let right:number = nums.length
  // 当left=right时，由于nums[right]不在查找范围，所以不必包括此情况
  while(left < right){
    //位运算 防止大数溢出 位运算往右移动一位等于除以2
    mid = left + ((right - left) >> 1)
    // 如果中间值大于目标值，中间值不应在下次查找的范围内，但中间值的前一个值应在；
    // 由于right本来就不在查找范围内，所以将右边界更新为中间值，如果更新右边界为mid-1则将中间值的前一个值也踢出了下次寻找范围
    if(nums[mid] > target){
      right  = mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return -1
}