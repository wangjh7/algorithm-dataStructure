import {TreeNode} from '../../TreeNode'

function minDepth(root: TreeNode | null): number {
  let helperQueue:TreeNode[] = []
  let minRes:number = 0
  let tempNode:TreeNode
  if(root !== null){
    helperQueue.push(root)
  }
  while(helperQueue.length > 0) {
    minRes++
    let length = helperQueue.length
    for(let i = 0; i < length; i++){
      tempNode = helperQueue.shift()!
      if(!tempNode.left && !tempNode.right){
        return minRes
      }
      if(tempNode.left) helperQueue.push(tempNode.left)
      if(tempNode.right) helperQueue.push(tempNode.right)
    }
  }
  return minRes
};