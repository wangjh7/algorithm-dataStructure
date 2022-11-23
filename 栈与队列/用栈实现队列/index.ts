// 使用两个数组的栈方法（push, pop） 实现队列

class MyQueue {
  private stackIn:number[]
  private stackOut:number[]
  constructor() {
    this.stackIn = []
    this.stackOut = []
  }

  push(x: number): void {
    this.stackIn.push(x)
  }

  pop(): number {
    if(this.stackOut.length === 0) {
      while(this.stackIn.length > 0){
        this.stackOut.push(this.stackIn.pop()!)
      }
    }
    return this.stackOut.pop()!
  }

  peek(): number {
    let temp:number = this.pop()
    this.stackOut.push(temp)
    return temp
  }

  empty(): boolean {
    return this.stackIn.length === 0 && this.stackOut.length === 0
  }
}

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/