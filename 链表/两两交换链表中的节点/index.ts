import {ListNode} from "../ListNode"

function swapPairs(head: ListNode | null): ListNode | null {
  const dummyNode : ListNode = new ListNode(0,head)
  let curNode:ListNode | null = dummyNode
  while(curNode && curNode.next && curNode.next.next){
    let firstNode: ListNode = curNode.next
    let secondNode : ListNode = curNode.next.next
    let thirdNode : ListNode | null = curNode.next.next.next
    curNode.next = secondNode
    secondNode.next = firstNode
    firstNode.next = thirdNode
    curNode = firstNode //因为firstNode.next是thirdNode
  }
  return dummyNode.next
};