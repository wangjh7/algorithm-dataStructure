/**
 * 1. 确定dp数组及下标的含义
 *    dp[j]表示容量为j的背包 最多可以背的最大重量为dp[j]
 * 2. 确定递推公式
 *    dp[j] = Math.max(dp[j],dp[j-stones[i]]+stones[i])
 * 4. 遍历顺序 使用一维dp数组，物品遍历的for循环放在外层，遍历背包的for循环放在内层，且内层for循环倒序遍历
 */

function lastStoneWeightII(stones: number[]): number {
  const sum:number = stones.reduce((pre:number,cur:number):number=>pre+cur)
  const target:number = Math.floor(sum/2)
  const n:number = stones.length
  const dp:number[] = new Array(target+1).fill(0)
  for(let i=0;i<n;i++){
    for(let j = target; j >= stones[i]; j--){
      dp[j] = Math.max(dp[j],dp[j-stones[i]]+stones[i])
    }
  }
  return sum - dp[target] - dp[target]
};