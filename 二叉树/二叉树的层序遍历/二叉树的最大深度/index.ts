import {TreeNode} from '../../TreeNode'

function maxDepth(root: TreeNode | null): number {
  let helperQueue:TreeNode[] = []
  let resDepth:number = 0
  let tempNode:TreeNode
  if(root !== null) {
    helperQueue.push(root)
  }
  while(helperQueue.length > 0){
    resDepth++
    let length = helperQueue.length
    for(let i = 0; i < length; i++){
      tempNode = helperQueue.shift()!
      if(tempNode.left) helperQueue.push(tempNode.left)
      if(tempNode.right) helperQueue.push(tempNode.right)
    }
  }
  return resDepth
};