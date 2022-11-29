import {TreeNode} from '../../TreeNode'

//前序遍历 中左右的顺序
function preorderTraversal(root: TreeNode | null): number[] {
  if(root === null) return []
  const res:number[] = []
  const helperStack:TreeNode[] = []
  let curNode:TreeNode = root
  helperStack.push(curNode)
  while(helperStack.length > 0){
    curNode = helperStack.pop()!
    res.push(curNode.val)
    if(curNode.right !== null){
      helperStack.push(curNode.right) //右子节点 先进后出
    }
    if(curNode.left !== null){
      helperStack.push(curNode.left) //左子节点 后进先出
    }
  }
  return res
}