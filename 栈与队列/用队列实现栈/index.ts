//使用两个队列模拟栈
class MyStack {
  private queue:number[]
  private tempQueue:number[]
  constructor() {
    this.queue = []
    this.tempQueue = []
  }

  push(x: number): void {
    this.queue.push(x)
  }

  pop(): number {
    for (let i = 0, length = this.queue.length - 1; i < length; i++) {
      this.tempQueue.push(this.queue.shift()!);
    }
    let res:number = this.queue.pop()!
    let temp:number[] = this.queue
    this.queue = this.tempQueue
    this.tempQueue = temp
    return res
  }

  top(): number {
    let res:number = this.pop()
    this.push(res)
    return res
  }

  empty(): boolean {
    return this.queue.length === 0
  }
}


//使用一个队列模拟栈
class MyStack1 {
  private queue:number[]
  constructor(){
    this.queue = []
  }
  push(x:number) :void {
    this.queue.push(x)
  }
  pop():number{
    let length = this.queue.length - 1
    for(let i = 0; i < length; i++){
      this.queue.push(this.queue.shift()!)
    }
    return this.queue.shift()!
  }
  top():number{
    let res:number = this.pop()
    this.push(res)
    return res
  }
  empty(){
    return this.queue.length === 0
  }
}