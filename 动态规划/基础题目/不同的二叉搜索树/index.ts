/**
 * dp[i]：1到i为节点组成的二叉搜索树的个数
 * 递推公式：dp[i] += dp[j - 1] * dp[i - j] 
 * j相当于是头结点的元素，从1遍历到i为止。
 * j-1 为j为头结点左子树节点数量
 * i-j 为以j为头结点右子树节点数量
 * 初始化：dp[0] = 1
 */
function numTrees(n: number): number {
  const dp:number[] = new Array(n+1).fill(0)
  dp[0] = 1
  dp[1] = 1
  for(let i = 2; i <= n; i++){
    for(let j = 1; j <= i; j++){
      dp[i] += dp[j-1] * dp[i-j]
    }
  }
  return dp[n]
};