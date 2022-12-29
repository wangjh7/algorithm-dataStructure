import {TreeNode} from '../TreeNode'

//层序遍历
function findBottomLeftValue(root: TreeNode | null): number {
  let helperQueue:TreeNode[] = []
  if(root !== null) helperQueue.push(root)
  let resVal:number = 0
  let tempNode:TreeNode
  while(helperQueue.length>0){
    let length:number = helperQueue.length
    resVal = helperQueue[0].val
    for(let i = 0; i < length; i++){
      tempNode = helperQueue.shift()!
      if(tempNode.left !== null) helperQueue.push(tempNode.left)
      if(tempNode.right !== null) helperQueue.push(tempNode.right)
    }
  }
  return resVal
};

//递归法
function findBottomLeftValue(root: TreeNode | null): number {
  function recur(root:TreeNode,depth:number):void{
    if(root.left == null && root.right == null){
      if(depth > maxDepth){
        maxDepth = depth
        resVal = root.val
      }
      return
    }
    if(root.left !== null) recur(root.left,depth+1)
    if(root.right !== null) recur(root.right,depth+1)
  }
  let maxDepth:number = 0
  let resVal:number = 0
  if(root === null) return resVal
  recur(root,1)
  return resVal
}