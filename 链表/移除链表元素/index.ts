/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

//在原链表上直接删除
function removeElements(head: ListNode | null, val: number): ListNode | null {
  //删除头部节点
  while(head !== null && head.val === val){
    head = head.next
  }
  if(head === null) return head
  //删除非头部节点
  let pre:ListNode = head
  let cur:ListNode | null = head.next
  while(cur){
    if(cur.val === val){
      pre.next = cur.next
    } else {
      //此处不加类型断言时：编译器会认为pre类型为ListNode, pre.next类型为ListNode | null
      pre = pre.next as ListNode
    }
    cur = cur.next
  }
  return head
};

//虚拟头节点
function removeElements1(head: ListNode | null, val: number): ListNode | null {
  const dummyHead = new ListNode(0,head)
  let pre = dummyHead
  let cur = dummyHead.next
  while(cur){
    if(cur.val === val){
      pre.next = cur.next
    } else {
      pre = cur
    }
    cur = cur.next
  }
  return dummyHead.next
}