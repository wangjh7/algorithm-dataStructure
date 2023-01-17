import {TreeNode,} from '../TreeNode'

//递归法 有返回值
function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if(root == null) return new TreeNode(val)
  if(root.val > val){
    root.left = insertIntoBST(root.left,val)
  } else {
    root.right = insertIntoBST(root.right,val)
  }
  return root
};

//递归法 无返回值
function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if(root == null) return new TreeNode(val)
  function recur(root:TreeNode|null, val:number):void{
    if(root === null){
      if(parentNode.val > val){
        parentNode.left = new TreeNode(val)
      } else {
        parentNode.right = new TreeNode(val)
      }
      return
    }
    parentNode = root
    if(root.val > val) recur(root.left,val)
    if(root.val < val) recur(root.right,val)
  }
  let parentNode:TreeNode = root
  recur(root,val)
  return root
}

//迭代法
function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if(root == null) return new TreeNode(val)
  let curNode:TreeNode|null = root
  let parentNode:TreeNode = root
  while(curNode !== null){
    parentNode = curNode
    if(curNode.val > val){
      curNode = curNode.left
    } else {
      curNode = curNode.right
    }
  }
  if(parentNode.val > val){
    parentNode.left = new TreeNode(val)
  } else {
    parentNode.right = new TreeNode(val)
  }
  return root
}