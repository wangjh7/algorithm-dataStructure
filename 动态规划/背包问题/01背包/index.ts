/**
 * 1. 确定dp数组及其下标含义
 *    dp[i][j]：下标为[0-i]的物品里任意取 放进容量为j的背包 价值总和的最大值
 * 2. 确定递推公式
 *    不放物品i：背包容量为j 里面不放入物品i的最大价值 就是dp[i-1][j]
 *    放物品i：背包容量为j-weight[i] 不放物品i的最大价值是dp[i-1][j-weight[i]] 所以放物品i的最大价值是 dp[i-1][j-weight[i]] + value[i]
 *    dp[i][j] = Math.max(dp[i-1][j],dp[i-1][j-weight[i]] + value[i])
 * 3. dp数组初始化
 *    1）如果背包容量j为0的话，即dp[i][0]，无论是选取哪些物品，背包价值总和一定为0。
 *    2）由递推公式可以看出 i是由i-1推出 所以i为0的时候一定要初始化   dp[0][j]，即：i为0，存放编号0的物品的时候，各个容量的背包所能存放的最大价值
 *       当 j < weight[0]的时候，dp[0][j] 应该是 0，因为背包容量比编号0的物品重量还小
 *       当j >= weight[0]时，dp[0][j] 应该是value[0]，因为背包容量放足够放编号0物品
 *    3）由递推公式可以看出 dp[i][j] 是由左上方数值推导出来的 所以其他下标初始值为何值都可以 因为都会被覆盖 这里初始化为0
 * 4. 确定遍历顺序
 */

function testWeightBagProblem(
  weight: number[],
  value: number[],
  size: number
): number {
  const goodsNum:number = weight.length
  const dp:number[][] = new Array(goodsNum).fill(0).map(_=>new Array(size+1).fill(0))
  for(let j = weight[0]; j <= size; j++){
    dp[0][j] = value[0]
  }
  for(let i = 1; i < goodsNum; i++){
    for(let j = 1; j <= size; j++){
      if(j<weight[i]){
        dp[i][j] = dp[i-1][j]
      } else {
        dp[i][j] = Math.max(dp[i-1][j],dp[i-1][j-weight[i]]+value[i])
      }
    }
  }
  return dp[goodsNum-1][size]
}

const weight = [1, 3, 4];
const value = [15, 20, 30];
const size = 4;
console.log(testWeightBagProblem(weight, value, size));


/**
 * 一维dp数组(滚动数组)
 * 1. dp数组的定义
 *    dp[j]：容量为j的背包 所背的物品价值最大值
 * 2. 递推公式
 *    dp[j-weight[i]]表示容量为j-weight[i]的背包所背的最大价值
 *    dp[j-weight[i]] + value[i] 表示容量为j-weight[i]的背包加上物品i的价值
 *    此时dp[j]有两个选择：1是取自己dp[j] 相当于二维数组的dp[i-1][j] 即不放入物品i 2是取dp[j-weight[i]] + value[i] 即放入物品i
 *    dp[j] = Math.max(dp[j],dp[j-weight[i]]+value[i])
 * 3. dp数组初始化
 *    dp[0]应该是0，因为背包容量为0所背的物品的最大价值就是0
 *    根据递推公式 dp数组在推导的时候一定是取价值最大的数 如果题目给的价值都是正整数 那么非0下标都初始化为0就可以了
 */

function testWeightBagProblem1(
  weight: number[],
  value: number[],
  size: number
): number {
  const goodsNum:number = weight.length
  const dp:number[] = new Array(size+1).fill(0)
  for(let i = 0; i < goodsNum; i++){
    for(let j = size; j >= weight[i]; j--){
      dp[j] = Math.max(dp[j],dp[j-weight[i]]+value[i])
    }
  }
  return dp[size]
}