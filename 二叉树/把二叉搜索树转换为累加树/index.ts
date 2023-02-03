import {TreeNode} from '../TreeNode'

//递归法
function convertBST(root: TreeNode | null): TreeNode | null {
  let pre:number = 0
  function recur(root:TreeNode|null):void{
    if(root == null) return

    recur(root.right)
    root.val += pre
    pre = root.val
    recur(root.left)
  }
  recur(root)
  return root
}

//迭代法
function convertBST(root: TreeNode | null): TreeNode | null {
  const helperStack:TreeNode[] = []
  let curNode:TreeNode|null = root
  let pre:number = 0
  while(curNode!==null ||helperStack.length > 0){
    while(curNode !== null){
      helperStack.push(curNode)
      curNode = curNode.right
    }
    curNode = helperStack.pop()!
    curNode.val += pre
    pre = curNode.val
    curNode = curNode.left
  }
  return root
}