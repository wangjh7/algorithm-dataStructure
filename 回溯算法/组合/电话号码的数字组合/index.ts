function letterCombinations(digits: string): string[] {
  if(digits.length == 0) return []
  const result:string[] = []
  let path:string[] = []
  const strMap:{[index:number]:string[]} = {
    1:[],
    2:['a','b','c'],
    3:['d','e','f'],
    4:['g','h','i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }
  
  function backtracking(digits:string,index:number):void{
    if(index == digits.length){
      result.push(path.join(''))
      // path = []
      return
    }
    let digit:number = Number(digits[index])
    const letters:string[] = strMap[digit]
    for(let i = 0; i < letters.length; i++){
      path.push(letters[i])
      backtracking(digits,index+1)
      path.pop()
    }
  }
  backtracking(digits,0)
  return result
};
letterCombinations("23")