import {TreeNode} from '../../TreeNode'

function preorderTraversal(root: TreeNode | null): number[] {
  function traverse(node:TreeNode|null,res:number[]):void{
    if(node == null) return
    res.push(node.val)
    traverse(node.left,res)
    traverse(node.right,res)
  }
  const res:number[] = []
  traverse(root,res)
  return res
};