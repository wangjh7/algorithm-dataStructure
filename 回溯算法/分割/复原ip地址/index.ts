function restoreIpAddresses(s: string): string[] {
  const result:string[] = []
  /**
   * @param s 
   * @param startIndex 搜索的起始位置
   * @param pointNum 添加逗点的数量
   */
  function backtracking(s:string,startIndex:number,pointNum:number):void{
    if(pointNum == 3) { //逗点数量为3时，分割结束
      if(isValid(s,startIndex,s.length - 1)){ //判断第四段子字符串是否合法，如果合法就放进result中
        result.push(s)
      }
      return 
    }

    for(let i = startIndex; i < s.length; i++){
      if(isValid(s,startIndex,i)){ // 判断 [startIndex,i] 这个区间的子串是否合法
        let arr:string[] = s.split("")
        s = arr.slice(0,i+1).join("") + "." + arr.slice(i+1).join("") //在i的后面插入逗点
        pointNum++
        backtracking(s,i+2,pointNum)
        pointNum-- //回溯
        s = arr.join("") //回溯
      } else {
        break //不合法 直接结束本层循环
      }
    }
  }
  backtracking(s,0,0)
  return result
};

function isValid(s:string,start:number,end:number):boolean{
  if(start>end) return false
  if(s[start] == "0" && start != end) return false //0开头的数字不合法
  let num:number = 0
  for(let i = start; i <= end; i++){
    if(s[i] > '9' || s[i] < '0'){ //遇到非法数字 不合法
      return false
    }
    num = num * 10 + Number(s[i])
    if(num > 255){ //如果大于255了 不合法
      return false
    }
  }
  return true
}

restoreIpAddresses("25525511135")