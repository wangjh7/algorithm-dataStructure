//双指针
function sortedSquares(nums: number[]): number[] {
  const answer : number[] = []
  let left = 0
  let right = nums.length - 1
  while(left <= right){
    //nums 为非递减排序的整数数组 右侧的元素不需要取绝对值
    if(Math.abs(nums[left]) > nums[right]){
      answer.unshift(nums[left] ** 2)
      left++
    } else {
      answer.unshift(nums[right] ** 2)
      right --
    }
  }
  return answer
};