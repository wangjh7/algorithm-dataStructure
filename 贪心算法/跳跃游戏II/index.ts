function jump(nums: number[]): number {
  if(nums.length == 1) return 0
  let curDistance:number = 0 //当前覆盖最远距离下标
  let ans:number = 0 //记录走的最大步数
  let nextDistance:number = 0 //下一步覆盖最远距离下标
  for(let i = 0; i < nums.length; i++){
    nextDistance = Math.max(nums[i]+i,nextDistance) // 更新下一步覆盖最远距离下标
    if(i == curDistance){ // 遇到当前覆盖最远距离下标
      if(curDistance < nums.length - 1){ // 如果当前覆盖最远距离下标不是终点
        ans++ //需要走下一步
        curDistance = nextDistance // 更新当前覆盖最远距离下标（相当于加油了）
        if(nextDistance >= nums.length - 1) break // 下一步的覆盖范围已经可以达到终点，结束循环
      } else break // 当前覆盖最远距到达集合终点，不用做ans++操作了，直接结束
    }
  }
  return ans
};

function jump(nums: number[]): number {
  let curDistance:number = 0 // 当前覆盖的最远距离下标
  let ans:number = 0 // 记录走的最大步数
  let nextDistance:number = 0 //下一步覆盖最远距离下标
  for(let i = 0; i < nums.length - 1; i++){ // 注意这里是小于nums.lenght - 1，这是关键所在，i最多走到num.length -2的位置
    nextDistance = Math.max(nums[i]+i,nextDistance) // 更新下一步覆盖最远距离下标
    if(i == curDistance){ // 遇到当前覆盖最远距离下标
      curDistance = nextDistance // 更新当前覆盖的最远距离下标
      ans++
    }
  }
  return ans
}