import {TreeNode} from '../../TreeNode'

function inorderTraversal(root: TreeNode | null): number[] {
  function traverse(node:TreeNode|null,res:number[]):void{
    if(node == null) return 
    traverse(node.left,res)
    res.push(node.val)
    traverse(node.right,res)
  }
  const res:number[] = []
  traverse(root,res)
  return res
};