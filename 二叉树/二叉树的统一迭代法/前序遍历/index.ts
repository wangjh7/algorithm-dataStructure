import {TreeNode} from '../../TreeNode'

/**
 * 前序遍历：中左右
 * 压栈顺序：右左中
 * 
 */

function preorderTraversal(root: TreeNode | null): number[] {
  let helperStack:(TreeNode|null)[] = []
  let res:number[] = []
  let curNode:TreeNode | null
  if(root === null) return res
  helperStack.push(root)
  while(helperStack.length > 0){
    curNode = helperStack.pop()!
    if(curNode !== null){
      if(curNode.right){
        helperStack.push(curNode.right)
      }
      if(curNode.left){
        helperStack.push(curNode.left)
      }
      helperStack.push(curNode)
      helperStack.push(null)
    } else {
      curNode = helperStack.pop()!
      res.push(curNode.val)
    }
  }
  return res
}