import {ListNode} from '../ListNode'

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let sizeA: number = 0
  let sizeB: number = 0
  let curA: ListNode | null = headA
  let curB: ListNode | null = headB
  while(curA){
    sizeA++
    curA = curA.next
  }
  while(curB){
    sizeB++
    curB = curB.next
  }
  curA = headA
  curB = headB
  if(sizeA < sizeB){
    [sizeA,sizeB] = [sizeB,sizeA];
    [curA,curB] = [curB,curA];
  }
  //sizeA >= sizeB
  let gap = sizeA - sizeB
  while(gap-- && curA){
    curA = curA.next
  }
  while(curA && curB){
    if(curA === curB){
      return curA
    }
    curA = curA.next
    curB = curB.next
  }
  return null
}