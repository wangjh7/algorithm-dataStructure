/**
 * 1. 确定dp数组及下标的含义
 *    dp[j]：填满容积为j的包 有dp[j]中方法
 */
function findTargetSumWays(nums: number[], target: number): number {
  const sum:number = nums.reduce((a,b)=>a+b)
  if((sum+target)%2 || Math.abs(target) > sum) return 0
  const left:number = (sum + target) / 2

  const dp:number[] = new Array(left+1).fill(0)
  dp[0] = 1 //装满容量为0的背包有1种方法（什么也不装）
  for(let i= 0; i < nums.length; i++){
    for(let j = left; j >= nums[i]; j--){
      dp[j] += dp[j-nums[i]]
    }
  }
  return dp[left]
};