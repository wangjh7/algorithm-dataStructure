import {TreeNode,} from '../TreeNode'

function isValidBST(root: TreeNode | null): boolean {
  let maxVal:number = -Infinity
  function inorderTraverse(root:TreeNode|null):boolean{
    if(root == null) return true
    let leftValid:boolean = inorderTraverse(root.left)
    if(!leftValid) return false
    if(maxVal < root.val){
      maxVal = root.val
    } else {
      return false
    }
    let rightValid:boolean = inorderTraverse(root.right)
    return leftValid && rightValid
  }
  return inorderTraverse(root)
};