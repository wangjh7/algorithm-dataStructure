function partition(s: string): string[][] {
  const result:string[][] = []
  const path:string[] = []
  function backtracking(s:string,startIndex:number):void{
    //如果起始位置已经大于s的大小，说明已经找到了一组分割方案了
    if(startIndex >= s.length){
      result.push(path.slice())
      return
    }

    for(let i = startIndex; i < s.length; i++){
      if(isPalindrome(s,startIndex,i)){ //是回文串
        const str:string = s.substring(startIndex,i + 1) //获取[startIndex,i]在s中的子串
        path.push(str)
      } else { //如果不是 直接跳过
        continue
      }
      backtracking(s,i+1) //寻找i+1为起始位置的子串
      path.pop()
    }
  }
  backtracking(s,0)
  return result
};

function isPalindrome(s:string,start:number,end:number):boolean{
  for(let i = start, j = end; i < j; i++ , j--){
    if(s[i] !== s[j]){
      return false
    }
  }
  return true
}

partition("aab")