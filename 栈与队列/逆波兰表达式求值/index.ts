function evalRPN(tokens: string[]): number {
  let helperStack:number[] = []
  let temp:number
  let i:number = 0
  while(i<tokens.length){
    let t:string = tokens[i]
    switch(t){
      case "+" :
        temp = helperStack.pop()! + helperStack.pop()!
        helperStack.push(temp)
        break;
      case "-" :
        temp = helperStack.pop()!
        temp = helperStack.pop()! - temp
        helperStack.push(temp)
        break;
      case "*":
        temp = helperStack.pop()! * helperStack.pop()!
        helperStack.push(temp)
        break;
      case "/":
        temp = helperStack.pop()!
        temp = Math.trunc(helperStack.pop()! / temp)
        helperStack.push(temp)
        break;
      default:
        helperStack.push(Number(t))
        break;
    }
    i++
  }
  return helperStack.pop()!
};