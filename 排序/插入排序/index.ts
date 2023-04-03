function insertionSort(arr:number[]):number[]{
  const length = arr.length
  let preIndex:number,current:number
  for(let i = 1; i < length; i++){
    preIndex = i - 1
    current = arr[i]
    while(preIndex >= 0 && arr[preIndex] > current){
      arr[preIndex+1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
  }
  return arr
}

insertionSort([5,4,3,2,1])