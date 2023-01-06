import {TreeNode} from '../TreeNode'

//递归法
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if(root == null || root.val == val) return root
  if(root.val < val) return searchBST(root.right,val)
  if(root.val > val) return searchBST(root.left,val)
  return null
};

//迭代法
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  let resNode:TreeNode|null = root
  while(resNode !== null){
    if(resNode.val == val) return resNode
    if(resNode.val < val) {
      resNode = resNode.right
    } else {
      resNode = resNode.left
    }
  }
  return null
}