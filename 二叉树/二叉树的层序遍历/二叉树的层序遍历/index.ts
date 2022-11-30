import {TreeNode} from '../../TreeNode'

/**
 * 这种层序遍历就是图论中的广度优先遍历，只不过我们应用在二叉树上
 */

function levelOrder(root: TreeNode | null): number[][] {
  let helperQueue:TreeNode[] = []
  let res:number[][] = []
  let tempArr:number[] = []
  if(root !== null) {
    helperQueue.push(root)
  }
  let curNode:TreeNode
  while(helperQueue.length > 0){
    let length = helperQueue.length
    for(let i = 0; i < length; i++){
      curNode = helperQueue.shift()!
      tempArr.push(curNode.val)
      if(curNode.left !== null){
        helperQueue.push(curNode.left)
      }
      if(curNode.right !== null){
        helperQueue.push(curNode.right)
      }
    }
    res.push(tempArr)
    tempArr = []
  }
  return res
};