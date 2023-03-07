function eraseOverlapIntervals(intervals: number[][]): number {
  const length:number = intervals.length
  if(length == 0) return 0
  intervals.sort((a,b) => a[1]-b[1])
  let right:number = intervals[0][1]
  let count:number = 1
  for(let i = 1; i < length; i++){
    if(intervals[i][0] >= right){
      count++
      right = intervals[i][1]
    }
  }
  return length - count
};