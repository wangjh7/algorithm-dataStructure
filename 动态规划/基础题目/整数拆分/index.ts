/**
 * dp[i]：分拆数字i，可以得到的最大乘积
 * 递推公式：从0到j遍历 j*(i-j)是把整数拆分然后相乘 j*dp[i-j]是把整数拆分成两个及两个以上相乘 比较两者和dp[i]哪个比较大
 */

function integerBreak(n: number): number {
  const dp:number[] = new Array(n+1).fill(0)
  dp[2] = 1
  for(let i = 3; i <= n; i++){
    for(let j = 1; j <= i / 2; j++){
      dp[i] = Math.max(dp[i],j*dp[i-j],j*(i-j))
    }
  }
  return dp[n]
};
integerBreak(10)