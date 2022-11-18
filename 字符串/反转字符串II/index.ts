function reverseStr(s: string, k: number): string {
  let left:number, right:number
  let arr:string[] = s.split("")
  let temp:string
  for(let i = 0; i < arr.length; i+=2*k){
    left = i
    right = (i + k - 1) >= arr.length ? arr.length - 1 : i + k - 1 //剩余字符少于k个？
    while(left < right){
      temp = arr[left]
      arr[left] = arr[right]
      arr[right] = temp
      left++
      right--
    }
  }
  return arr.join("")
};