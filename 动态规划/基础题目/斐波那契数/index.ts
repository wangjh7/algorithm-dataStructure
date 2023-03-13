function fib(n: number): number {
  /**
      dp[i]: 第i个斐波那契数
      dp[0]: 0;
      dp[1]：1；
      ...
      dp[i] = dp[i - 1] + dp[i - 2];
   */
  const dp:number[] = []
  dp[0] = 0
  dp[1] = 1
  for(let i = 2; i <=n; i++){
    dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n]
};