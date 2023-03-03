//方法一
function canCompleteCircuit(gas: number[], cost: number[]): number {
  let curSum:number = 0
  let min:number = Infinity
  for(let i = 0; i < gas.length; i++){
    let rest = gas[i] - cost[i]
    curSum += rest
    if(curSum < min){
      min = curSum
    }
  }

  if(curSum < 0) return -1 //说明 总油量 小于 总消耗量 返回-1
  if(min >= 0) return 0 // 说明 邮箱里的油没有断过 从下标0开始行驶即可 返回0
  //从后向前 看哪个节点能把负数的min填平 能填平的节点就是出发节点
  for(let i = gas.length - 1; i >= 0; i--){
    let rest = gas[i] - cost[i]
    min += rest
    if(min >= 0){
      return i
    }
  }
  return -1
};

//方法二
function canCompleteCircuit1(gas: number[], cost: number[]): number {
  let curSum:number = 0
  let totalSum:number = 0
  let start:number = 0
  for(let i = 0; i < gas.length; i++){
    curSum += gas[i] - cost[i]
    totalSum += gas[i] - cost[i]
    if(curSum < 0) { //rest[i]的累加和是curSum 一旦它小于0
      start = i+1
      curSum = 0
    }
  }
  if(totalSum < 0) return -1 //说明怎么走都不可能跑一圈
  return start
}