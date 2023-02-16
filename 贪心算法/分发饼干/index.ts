//大饼干先喂饱大胃口
function findContentChildren(g: number[], s: number[]): number {
  g.sort((a,b)=>a-b)
  s.sort((a,b)=>a-b)
  let index:number = s.length - 1 //饼干数组的下标
  let result:number = 0
  for(let i = g.length - 1; i >=0; i--){ //遍历胃口
    if(index >= 0 && s[index] >= g[i]){ //遍历饼干
      result++
      index--
    }
  }
  return result
};

//小饼干先喂饱小胃口
function findContentChildren(g:number[],s:number[]):number{
  g.sort((a,b)=>a-b)
  s.sort((a,b)=>a-b)
  let index:number = 0
  for(let i = 0; i < s.length; i++){ //遍历饼干
    if(index < g.length && g[index] <= s[i]){ //遍历胃口
      index++
    }
  }
  return index
}