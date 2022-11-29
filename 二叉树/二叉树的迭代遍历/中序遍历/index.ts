import {TreeNode} from '../../TreeNode'

//中序遍历时左中右的遍历顺序
function inorderTraversal(root: TreeNode | null): number[] {
  if(root === null) return []
  const res:number[] = []
  const helperStack:TreeNode[] = []
  let curNode:TreeNode | null = root
  while(curNode !== null || helperStack.length > 0){ //curNode不为空 或者 helperStack不为空时
    if(curNode !== null){ //curNode不为空 curNode入栈 指针接着指向其左子节点
      helperStack.push(curNode)
      curNode = curNode.left
    } else { //curNode为空
      curNode = helperStack.pop()!
      res.push(curNode.val)
      curNode = curNode.right
    }
  }
  return res
}