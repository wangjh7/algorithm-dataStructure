import {ListNode} from '../ListNode'

//快慢指针
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummyHead: ListNode = new ListNode(0,head)
  let fastNode : ListNode = dummyHead
  let slowNode : ListNode = dummyHead
  while(n--){
    fastNode = fastNode.next!
  }
  while(fastNode.next){
    fastNode = fastNode.next
    slowNode = slowNode.next!
  }
  slowNode.next = slowNode.next!.next
  return dummyHead.next
};

//递归倒退n法
function removeNthFromEnd1(head: ListNode | null, n: number): ListNode | null {
  let newHead:ListNode | null = new ListNode(0,head)
  let cnt: number = 0 //cnt从链表尾端开始计数
  function recur(node:ListNode | null){
    if(node === null) return 
    recur(node.next)
    cnt++
    if(cnt === n + 1){
      node.next = node.next!.next
    }
  }
  recur(newHead)
  return newHead.next
}