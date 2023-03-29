/**
 * 1. 确定dp数组及下标含义
 *    dp[j]：背包总容量是j 放进物品后 背的最大重量是dp[j]
 * 2. 递推公式：dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
 */
function canPartition(nums: number[]): boolean {
  const sum:number = nums.reduce((pre,cur)=>{return pre+cur})
  if(sum%2 === 1) return false 
  const bagSize:number = sum/2
  const goodNum:number = nums.length
  const dp:number[] = new Array(bagSize+1).fill(0)
  for(let i = 0; i < goodNum; i++){
    for(let j=bagSize; j >= nums[i]; j--){
      dp[j] = Math.max(dp[j],dp[j-nums[i]]+nums[i])
    }
  }
  return dp[bagSize] === bagSize
};

function canPartition(nums: number[]): boolean {
  const sum:number = nums.reduce((pre,cur)=>{return pre+cur})
  if(sum%2 === 1) return false 
  const bagSize:number = sum/2
  const weightArr:number[] = nums
  const valueArr:number[] = nums
  const goodNum:number = weightArr.length
  const dp:number[][] = new Array(goodNum).fill(0).map(_=>new Array(bagSize+1).fill(0))
  for(let i = weightArr[0];i <= bagSize; i++){
    dp[0][i] = valueArr[0]
  }
  for(let i=1; i < goodNum;i++){
    for(let j = 0; j <= bagSize;j++){
      if(j < weightArr[i]){
        dp[i][j] = dp[i-1][j]
      } else {
        dp[i][j] = Math.max(dp[i-1][j],dp[i-1][j-weightArr[i]]+valueArr[i])
      }
    }
  }
  return dp[goodNum-1][bagSize] === bagSize
}