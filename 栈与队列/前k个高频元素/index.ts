type CompareFn = (a:[number,number],b:[number,number])=> number
class Heap {
  private compareFn:CompareFn
  private queue:[number,number][]
  constructor(compareFn:CompareFn){
    this.compareFn = compareFn
    this.queue = []
  }
  //添加
  push(item:[number,number]){
    //推入元素
    this.queue.push(item)
    
    //上浮
    let index:number = this.size() - 1 //推入元素下标
    let parent:number = Math.floor((index - 1) / 2)
    while(parent >=0 && this.compare(parent,index) > 0){
      //交换index和parent的值
      [this.queue[index],this.queue[parent]] = [this.queue[parent],this.queue[index]]

      //更新下标
      index = parent
      parent = Math.floor((index - 1) / 2)
    }
  }

  pop():[number,number]{
    //堆顶元素
    const out:[number,number] = this.queue[0]

    //移除堆顶元素 填入最后一个元素
    this.queue[0] = this.queue.pop()!

    //下沉
    let index:number = 0 //记录下沉元素下标
    let left:number = 1 //left是左子节点下标 left+1是右子节点下标
    let searchChild:number = this.compare(left,left+1) > 0 ? left + 1 : left

    while(searchChild !== undefined && this.compare(index,searchChild) > 0){
      [this.queue[index],this.queue[searchChild]] = [this.queue[searchChild],this.queue[index]]

      //更新下标
      index = searchChild
      left = 2 * index + 1
      searchChild = this.compare(left,left+1) > 0 ? left+1 : left
    }
    return out
  }

  size():number{
    return this.queue.length
  }

  //使用传入的compareFn比较两个元素的位置
  compare(index1:number,index2:number):number{
    //处理下标越界
    if(this.queue[index1] === undefined) return 1
    if(this.queue[index2] == undefined) return -1

    return this.compareFn(this.queue[index1],this.queue[index2])
  }
}

function topKFrequent(nums: number[], k: number): number[] {
  const map:Map<number,number> = new Map()
  for(const num of nums){
    map.set(num,(map.get(num)||0) + 1)
  }
  //创建小顶堆
  const heap:Heap = new Heap((a,b)=>a[1]-b[1])

  // entry 是一个长度为2的数组，0位置存储key，1位置存储value
  for(const entry of map.entries()){
    heap.push(entry)
    if(heap.size() > k){
      heap.pop()
    }
  }

  const res:number[] = []
  for(let i = heap.size() -1; i >= 0; i--){
    res[i] = heap.pop()[0]
  }
  return res
};