function candy(ratings: number[]): number {
  const candyVec:number[] = Array(ratings.length).fill(1)
  //从前向后
  for(let i = 1; i < ratings.length ; i++){
    if(ratings[i] > ratings[i-1]) {
      candyVec[i] = candyVec[i-1]+1
    }
  }
  for(let i = ratings.length - 2; i >= 0; i--){
    if(ratings[i] > ratings[i+1]){
      candyVec[i] = Math.max(candyVec[i],candyVec[i+1]+1)
    }
  }
  let result:number = 0
  for(let i = 0; i < candyVec.length; i++){
    result += candyVec[i]
  }
  return result
};