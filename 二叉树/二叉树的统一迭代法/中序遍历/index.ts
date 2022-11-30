import {TreeNode} from '../../TreeNode'
/**
 * 中序遍历：左中右
 * 压栈顺序：右中左
 */
function inorderTraversal(root: TreeNode | null): number[] {
  let helperStack:(TreeNode|null)[] = []
  let res:number[] = []
  let curNode:TreeNode | null
  if(root === null) return res
  helperStack.push(root)
  while(helperStack.length > 0){
    curNode = helperStack.pop()!
    if(curNode !== null){
      if(curNode.right !== null){
        helperStack.push(curNode.right)
      }
      helperStack.push(curNode)
      helperStack.push(null)
      if(curNode.left !== null){
        helperStack.push(curNode.left)
      }
    } else {
      curNode = helperStack.pop()!
      res.push(curNode.val)
    }
  }
  return res
}