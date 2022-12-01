import {TreeNode} from '../../TreeNode'

function largestValues(root: TreeNode | null): number[] {
  let helperQueue:TreeNode[] = []
  let resArr:number[] = []
  let tempNode:TreeNode
  let max:number = 0
  if(root !== null){
    helperQueue.push(root)
  }
  while(helperQueue.length > 0){
    let length = helperQueue.length
    for(let i = 0; i < length; i++){
      tempNode = helperQueue.shift()!
      if(i == 0) {
        max = tempNode.val
      } else {
        max = max > tempNode.val ? max : tempNode.val
      }
      if(tempNode.left) helperQueue.push(tempNode.left)
      if(tempNode.right) helperQueue.push(tempNode.right)
    }
    resArr.push(max)
  }
  return resArr
};