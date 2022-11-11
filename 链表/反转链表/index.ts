import {ListNode} from "../ListNode"

//双指针
function reverseList(head: ListNode | null): ListNode | null {
  let prevNode : ListNode | null = null
  let curNode : ListNode | null = head
  let tempNode : ListNode | null
  while(curNode) {
    tempNode = curNode.next
    curNode.next = prevNode
    prevNode = curNode
    curNode = tempNode
  }
  return prevNode
};

//递归 从前往后翻转
function reverseList1(head: ListNode | null): ListNode | null {
  function recur(prevNode:ListNode | null, curNode: ListNode | null) : ListNode | null{
    if(curNode === null) {
      return prevNode
    }
    let tempNode : ListNode | null = curNode.next
    curNode.next = prevNode
    prevNode = curNode
    curNode = tempNode
    return recur(prevNode,curNode)
  }
  return recur(null,head)
}

//递归 从后往前翻转
let newHead : ListNode
function reverseList2(head: ListNode | null): ListNode | null {
  if(head === null) return null
  function recur(node:ListNode,prevNode:ListNode | null) : void{
    if(node.next === null){
      newHead = node
      newHead.next = prevNode
    } else {
      recur(node.next,node)
      node.next = prevNode
    }
  }
  recur(head,null)
  return newHead
}