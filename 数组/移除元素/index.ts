//暴力解法
function removeElement(nums: number[], val: number): number {
  let size:number = nums.length
  for (let i = 0; i < size; i++) {
    if(nums[i] == val){ //发现需要移除的元素，将数组集体向前移动一位
      for(let j = i+1; j < size; j++){
        nums[j-1] = nums[j]
      }
      i-- //因为下标i以后的数值都向前移动了一位，所以i也向前移动一位
      size-- //此时数组的大小减一
    }
  }
  return size
};

//双指针
function removeElement1(nums: number[], val: number): number {
  let slowIndex:number = 0;
  let fastIndex:number = 0;
  while(fastIndex < nums.length){
    if(nums[fastIndex] !== val){
      nums[slowIndex++] = nums[fastIndex]
    }
    fastIndex++
  }
  return slowIndex
}