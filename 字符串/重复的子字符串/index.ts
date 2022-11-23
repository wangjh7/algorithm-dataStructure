//KMP

function repeatedSubstringPattern(s: string): boolean {
  function getNext(str:string):number[]{
    let next:number[] = []
    let j:number = 0
    next[0] = j
    for(let i = 1; i < str.length; i++){
      while(j>0 && str[i] !== str[j]){
        j = next[j - 1]
      }
      if(str[j] === str[i]){
        j++
      }
      next[i] = j
    }
    return next
  }
  let next:number[] = getNext(s)
  let sLength:number = s.length
  let nextLength:number = next.length
  let suffixLength:number = next[nextLength - 1] //最长相同前后缀的长度
  if(suffixLength > 0 && sLength % (sLength - suffixLength) == 0) {
    return true
  }
  return false
};