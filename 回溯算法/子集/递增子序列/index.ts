function findSubsequences(nums: number[]): number[][] {
  const result:number[][] = []
  const path:number[] = []
  function backtracking(nums:number[],startIndex:number):void{
    if(path.length > 1){
      result.push(path.slice())
      //注意这里不要加return 因为要取树上所有节点
    }
    const usedSet:Set<number> = new Set()
    for(let i = startIndex; i < nums.length; i++){
      if(nums[i] < path[path.length - 1] || usedSet.has(nums[i])){ //如果 nums[i]比path中最后一个数字小 或者 usedSet中有nums[i] 则跳过此循环
        continue
      }
      usedSet.add(nums[i]) // 记录这个元素在本层用过了，本层后面不能再用了
      path.push(nums[i])
      backtracking(nums,i+1)
      path.pop()
    }
  }
  backtracking(nums,0)
  return result
};
findSubsequences([4,6,7,7])