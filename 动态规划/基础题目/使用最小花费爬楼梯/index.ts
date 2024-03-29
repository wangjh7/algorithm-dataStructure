//dp[i] 到达第i台阶所花费的最少体力
function minCostClimbingStairs(cost: number[]): number {
  const dp:number[] = []
  const length = cost.length
  dp[0] = 0
  dp[1] = 0
  for(let i = 2; i <= length; i++){
    dp[i] = Math.min(dp[i-1]+cost[i-1],dp[i-2]+cost[i-2])
  }
  return dp[length]
};