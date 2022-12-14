function twoSum(nums: number[], target: number): number[] {
  let helperMap:Map<number,number> = new Map()
  let index:number|undefined
  let resArr:number[] = []
  for(let i = 0; i < nums.length; i++){
    index = helperMap.get(target - nums[i])
    if(index !== undefined){
      resArr = [index,i]
    }
    helperMap.set(nums[i],i)
  }
  return resArr
};