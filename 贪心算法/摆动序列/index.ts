//贪心算法
function wiggleMaxLength(nums: number[]): number {
  if(nums.length <= 1) return nums.length
  let curDiff:number = 0 //当前一对差值
  let prevDiff:number = 0 //之前一对差值
  let result:number = 1 //记录峰值个数 默认序列最右边有一个峰值
  for(let i = 0; i < nums.length; i++){
    curDiff = nums[i+1] - nums[i]
    if((prevDiff <= 0 && curDiff > 0) || (prevDiff >=0 && curDiff < 0)){
      result++
      prevDiff = curDiff //只在摆动变化时更新prevDiff
    }
  }
  return result
};

//动态规划
function wiggleMaxLength1(nums: number[]): number {
  const length:number = nums.length
  if(length <= 1) return length
  const dp:number[][] = new Array(length).fill(0).map(_=>[])
  dp[0][0] = 1 //第一个数作为波峰
  dp[0][1] = 1 //第一个数作为波谷
  for(let i = 1; i < length; i++){
    dp[i][0] = 1
    dp[i][1] = 1
    for(let j = 0; j < i; j++){
      if(nums[j] < nums[i]) {
        dp[i][0] = Math.max(dp[i][0],dp[j][1]+1)
      }
    }
    for(let j = 0; j < i; j++){
      if(nums[j] > nums[i]){
        dp[i][1] = Math.max(dp[i][1],dp[j][0]+1)
      }
    }
  }
  return Math.max(dp[length-1][0],dp[length-1][1])
}
wiggleMaxLength1([1,7,4,9,2,5])