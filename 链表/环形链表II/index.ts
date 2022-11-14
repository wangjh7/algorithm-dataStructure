import {ListNode} from '../ListNode'
//双指针

function detectCycle(head: ListNode | null): ListNode | null {
  let slowNode: ListNode | null = head
  let fastNode: ListNode | null = head
  while(fastNode !== null && fastNode.next !== null){ //如果没有环 走到尾节点会退出while循环
    slowNode = slowNode!.next
    fastNode = fastNode.next.next
    if(slowNode == fastNode){
      let slowNode = head
      while(slowNode !== fastNode){
        slowNode = slowNode!.next
        fastNode = fastNode!.next
      }
      return slowNode
    }
  }
  return null
}