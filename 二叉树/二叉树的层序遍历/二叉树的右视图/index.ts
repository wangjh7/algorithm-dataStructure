import {TreeNode} from '../../TreeNode'

function rightSideView(root: TreeNode | null): number[] {
  let helperQueue:TreeNode[] = []
  let resArr:number[] = []
  let tempNode:TreeNode
  if(root !== null) helperQueue.push(root)
  while(helperQueue.length > 0){
    let length = helperQueue.length
    for(let i = 0; i < length; i++){
      tempNode = helperQueue.shift()!
      if(i == length - 1){
        resArr.push(tempNode.val)
      }
      if(tempNode.left){
        helperQueue.push(tempNode.left)
      }
      if(tempNode.right){
        helperQueue.push(tempNode.right)
      }
    }
  }
  return resArr
};