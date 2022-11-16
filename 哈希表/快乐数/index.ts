function isHappy(n: number): boolean {
  function calcSum(val:number) : number {
    return String(val).split("").reduce((pre,cur)=>{
      return pre + Number(cur) * Number(cur)
    },0)
  }
  let storeSet:Set<number> = new Set()
  while(n!==1 && !storeSet.has(n)){
    storeSet.add(n)
    n = calcSum(n)
  }
  return n === 1
};