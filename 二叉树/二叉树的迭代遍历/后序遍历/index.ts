import {TreeNode} from '../../TreeNode'

/** 后序遍历 顺序是左右中
 *  将前序遍历的中左右 调整为 中右左
 *  然后将结果数组反转 即为后序遍历的顺序
 */

function postorderTraversal(root: TreeNode | null): number[] {
  if(root === null) return []
  const res:number[] = []
  const helperStack:TreeNode[] = []
  let curNode:TreeNode
  helperStack.push(root)
  while(helperStack.length > 0){
    curNode = helperStack.pop()!
    res.push(curNode.val)
    if(curNode.left !== null){
      helperStack.push(curNode.left)
    }
    if(curNode.right !== null){
      helperStack.push(curNode.right)
    }
  }
  return res.reverse()
}