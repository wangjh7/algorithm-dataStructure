import {TreeNode} from '../../TreeNode'

/**
 * 后序遍历：左右中
 * 压栈顺序：中右左
 */

function postorderTraversal(root: TreeNode | null): number[] {
  let helperStack:(TreeNode|null)[] = []
  let res:number[] = []
  let curNode:TreeNode | null
  if(root === null) return res
  helperStack.push(root)
  while(helperStack.length > 0){
    curNode = helperStack.pop()!
    if(curNode !== null){
      helperStack.push(curNode)
      helperStack.push(null)
      if(curNode.right){
        helperStack.push(curNode.right)
      }
      if(curNode.left){
        helperStack.push(curNode.left)
      }
    } else {
      curNode = helperStack.pop()!
      res.push(curNode.val)
    }
  }
  return res
}