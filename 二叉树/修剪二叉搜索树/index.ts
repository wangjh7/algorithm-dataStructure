import {TreeNode} from '../TreeNode'

//递归法
function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
  if(root == null) return null

  if(root.val < low){
    return trimBST(root.right,low,high)
  }
  if(root.val > high){
    return trimBST(root.left,low,high)
  }
  root.left = trimBST(root.left,low,high)
  root.right = trimBST(root.right,low,high)
  return root
};

//迭代法
//因为二叉搜索树的有序性，不需要使用栈模拟递归的过程
function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
  if(root == null) return null
  // 处理头结点，让root移动到[low, high] 范围内，注意是左闭右闭
  while(root!=null && (root.val < low || root.val > high)){
    if(root.val < low){
      root = root.right
    } else {
      root = root.left
    }
  }
  let curNode:TreeNode|null = root
  while(curNode !== null){
    while(curNode.left !== null && curNode.left.val < low){
      curNode.left = curNode.left.right
    }
    curNode = curNode.left
  }
  curNode = root
  while(curNode !== null){
    while(curNode.right !== null && curNode.right.val > high){
      curNode.right = curNode.right.left
    }
    curNode = curNode.right
  }
  return root
}