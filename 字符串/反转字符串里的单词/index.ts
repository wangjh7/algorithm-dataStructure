function reverseWords(s: string): string {
  function delExtraSpace(arr: string[]): void {
    let left:number = 0,
    right:number = 0,
    length:number = arr.length;

    while(right < length && arr[right] === " ") {
      right++ //right指针指向字符串第一个非空格字符
    }
    while(right < length) {
      if(arr[right] === " " && arr[right - 1] === " "){ //如果right遍历到字符串尾部空格部分，只向右移动right指针
        right++
        continue
      }
      arr[left++] = arr[right++] //left指针从下标0开始向arr中填充非空字符
    }
    if(arr[left - 1] === " "){
      arr.length = left - 1
    } else {
      arr.length = left
    }
  }

  function reverseWord(strArr:string[],start:number,end:number):void{
    let temp:string
    while(start<end){
      temp = strArr[start]
      strArr[start] = strArr[end]
      strArr[end] = temp
      start++
      end--
    }
  }
  let strArr:string[] = s.split("")
  delExtraSpace(strArr)
  let length:number = strArr.length
  reverseWord(strArr,0,length - 1)
  let start:number = 0, end:number = 0
  while(start < length){
    end = start
    while(strArr[end] !== " " && end < length){
      end++
    }
    //反转单个单词
    reverseWord(strArr,start,end-1)
    start = end + 1
  }
  return strArr.join("")
};