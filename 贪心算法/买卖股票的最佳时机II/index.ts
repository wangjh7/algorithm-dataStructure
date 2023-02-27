function maxProfit(prices: number[]): number {
  let result:number = 0
  for(let i = 1; i < prices.length; i++){
    result += Math.max(prices[i]-prices[i-1],0)
  }
  return result
};