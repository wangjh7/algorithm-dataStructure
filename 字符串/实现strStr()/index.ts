//KMP算法

//前缀表不减一
function strStr(haystack: string, needle: string): number {
  function getNext(str:string):number[]{ //求前缀表
    let next:number[] = []
    let j:number = 0 //j指向前缀末尾位置
    next[0] = j
    for(let i = 1; i < str.length; i++){ //i指向后缀末尾位置
      while(j>0 && str[i] !== str[j]){
        j = next[j-1]
      }
      if(str[i] == str[j] ){
        j++
      }
      next[i] = j
    }
    return next
  }
  if(needle.length == 0) return 0
  let next: number[] = getNext(needle)
  let j:number = 0 //j指向模式串
  for(let i=0; i < haystack.length; i++){ //i指向文本串
    while(j > 0 && haystack[i] !== needle[j]){
      j = next[j-1]
    }
    if(haystack[i] === needle[j]){
      if(j === needle.length - 1){
        return i - j
      }
      j++
    }
  }
  return -1
};