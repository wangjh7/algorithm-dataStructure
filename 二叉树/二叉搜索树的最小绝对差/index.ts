import {TreeNode,} from '../TreeNode'

//递归
function getMinimumDifference(root: TreeNode | null): number {
  let preNode:TreeNode|null = null
  let resMin:number = Infinity
  function recur(root:TreeNode|null):void{
    if(root == null) return 
    recur(root.left)
    if(preNode !== null){
      resMin = Math.min(resMin,root.val - preNode.val)
    }
    preNode = root
    recur(root.right)
  }
  recur(root)
  return resMin
};

//迭代
function getMinimumDifference(root: TreeNode | null): number {
  const helperStack:TreeNode[] = []
  let curNode:TreeNode|null = root
  let resMin:number = Infinity
  let preNode:TreeNode|null = null
  while(curNode !== null || helperStack.length>0){
    if(curNode !== null){
      helperStack.push(curNode)
      curNode = curNode.left
    } else {
      curNode = helperStack.pop()!
      if(preNode !== null){
        resMin = Math.min(resMin,curNode.val - preNode.val)
      }
      preNode = curNode
      curNode = curNode.right
    }
  }
  return resMin
}