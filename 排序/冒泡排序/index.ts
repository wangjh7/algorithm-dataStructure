function bubbleSort(arr:number[]):number[]{
  let length = arr.length
  for(let i = 0; i < length -1; i++){
    for(let j = 0; j < length - 1 - i; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j+1]
        arr[j+1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}