function selectionSort(arr:number[]):number[]{
  let length = arr.length
  let minIndex:number,temp:number
  for(let i = 0; i < length - 1; i++){
    minIndex = i
    for(let j = i + 1; j < length; j++){
      if(arr[j] < arr[minIndex]){ //找到最小的数
        minIndex = j //将最小的数的索引保存
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}