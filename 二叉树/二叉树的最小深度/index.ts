import {TreeNode} from '../TreeNode'

//递归法
function minDepth(root: TreeNode | null): number {
  if(root == null) return 0
  if(root.left !== null && root.right === null){
    return 1 + minDepth(root.left)
  }
  if(root.right !== null && root.left === null){
    return 1 + minDepth(root.right)
  } 
  return 1 + Math.min(minDepth(root.left),minDepth(root.right))
}

//迭代法 层序遍历
function minDepth(root: TreeNode | null): number {
  let helperQueue:TreeNode[] = []
  let resMin:number = 0
  let tempNode:TreeNode
  if(root !== null) helperQueue.push(root)
  while(helperQueue.length > 0){
    resMin++
    let length = helperQueue.length
    for(let i = 0; i < length; i++){
      tempNode = helperQueue.shift()!
      if(tempNode.left == null && tempNode.right == null) return resMin
      if(tempNode.left !== null) helperQueue.push(tempNode.left)
      if(tempNode.right !== null) helperQueue.push(tempNode.right)
    }
  }
  return resMin
}