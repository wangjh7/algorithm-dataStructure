import {TreeNode} from '../../TreeNode'

function postorderTraversal(root: TreeNode | null): number[] {
  function traverse(node:TreeNode|null,res:number[]):void{
    if(node === null) return
    traverse(node.left,res)
    traverse(node.right,res)
    res.push(node.val)
  }
  const res:number[] = []
  traverse(root,res)
  return res
};