function maxSubArray(nums: number[]): number {
  let result:number = -Infinity
  let count:number = 0
  for(let i = 0; i < nums.length; i++){
    count += nums[i]
    if(count > result){ //取区间累计的最大值（相当于不断确定最大子序终止位置）
      result = count
    }
    if(count <= 0) count = 0 // 相当于重置最大子序起始位置，因为遇到负数一定是拉低总和
  }
  return result
};

maxSubArray([-1])