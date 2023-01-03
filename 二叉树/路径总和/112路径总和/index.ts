import {TreeNode} from '../../TreeNode'

//递归法
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  function recur(node:TreeNode,sum:number):boolean{
    if(node.left === null && node.right === null && sum === 0) return true
    if(node.left !== null){
      sum -= node.left.val
      if(recur(node.left,sum) === true) return true
      sum += node.left.val
    }
    if(node.right !== null){
      sum -= node.right.val
      if(recur(node.right,sum) === true) return true
      sum += node.right.val
    }
    return false
  }
  if(root === null) return false
  return recur(root,targetSum-root.val)
};