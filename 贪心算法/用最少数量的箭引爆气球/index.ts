function findMinArrowShots(points: number[][]): number {
  const length:number = points.length
  if(length == 0) return 0
  points.sort((a,b)=>a[0]-b[0])
  let resCount:number = 1
  let right:number = points[0][1] //右边界
  let tempPoint:number[]
  for(let i = 1; i < length; i++){
    tempPoint = points[i]
    if(tempPoint[0] > right){
      resCount++
      right = tempPoint[1]
    } else {
      right = Math.min(right,tempPoint[1])
    }
  }
  return resCount
};