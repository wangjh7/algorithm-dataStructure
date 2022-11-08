class ListNode {
  public val:number;
  public next:ListNode | null;
  constructor(val?:number,next?:ListNode|null){
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class MyLinkedList {
  private size:number;
  private head:ListNode | null;
  private tail:ListNode | null;
  constructor(){
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  private getNode(index:number):ListNode {
    let curNode:ListNode = new ListNode(0,this.head)
    for(let i=0;i <= index ; i++){
      curNode = curNode.next as ListNode
    }
    return curNode
  }

  //获取链表中第index个节点的值
  get(index:number):number{
    if(index < 0 || index >= this.size){
      return -1
    }
    let curNode = this.getNode(index)
    return curNode.val
  }

  //在链表的第一个元素之前添加一个值为val的节点。插入后，新节点将成为链表的第一个节点
  addAtHead(val:number):void{
    let node:ListNode = new ListNode(val,this.head)
    this.head = node
    if(!this.tail){
      this.tail = node
    }
    this.size++
  }

  //将值为val的节点追加到链表的最后一个元素
  addAtTail(val:number):void{
    let node : ListNode = new ListNode(val,null)
    if(this.tail){
      this.tail.next = node
    } else { //如果没有尾节点，说明一个节点还没有
      this.head = node
    }
    this.tail = node
    this.size++
  }

  //在链表第index个节点之前添加值为val的节点 头节点index是0
  addAtIndex(index:number,val:number):void{
    //如果index等于链表的长度，则该节点将被加到链表的末尾
    if(index == this.size) {
      this.addAtTail(val)
      return
    }
    //如果index大于链表长度 直接返回
    if(index > this.size){
      return
    }

    //如果index小于等于0 在链表头部插入
    if(index <= 0){
      this.addAtHead(val)
      return
    }

    //正常情况
    //获取插入位置的前一个node
    let curNode = this.getNode(index-1)
    let node:ListNode = new ListNode(val,curNode.next)
    curNode.next = node
    this.size++
  }

  //如果索引index有效，删除链表中的第index个节点 头节点index是0
  deleteAtIndex(index:number):void{
    if(index < 0 || index >= this.size){
      return
    }
    //处理头节点
    if(index == 0 ){
      this.head = this.head!.next //!.非空断言
      if(index == this.size - 1){
        //如果链表中只有一个元素，删除头节点之后，需要处理尾节点
        this.tail = null
      }
      this.size--
      return
    }
    //索引有效
    let curNode:ListNode = this.getNode(index-1) //curNode是要删除节点的上一个节点
    curNode.next = curNode.next!.next
    //处理尾节点
    if(index == this.size - 1){
      this.tail = curNode
    }
    this.size--
  }
}