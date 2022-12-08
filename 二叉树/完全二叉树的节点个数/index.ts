import {TreeNode} from '../TreeNode'

//递归
function countNodes(root: TreeNode | null): number {
  if(root === null) return 0
  const leftNum:number = countNodes(root.left)
  const rightNum:number = countNodes(root.right)
  const treeNodeNum:number = leftNum + rightNum + 1
  return treeNodeNum
};

//迭代 层序遍历
function countNodes(root: TreeNode | null): number {
  let helperQueue:TreeNode[] = []
  let resCount:number = 0
  let tempNode:TreeNode
  if(root !== null) helperQueue.push(root)
  while(helperQueue.length>0){
    let length = helperQueue.length
    for(let i = 0; i < length; i++){
      tempNode = helperQueue.shift()!
      resCount++
      if(tempNode.left) helperQueue.push(tempNode.left)
      if(tempNode.right) helperQueue.push(tempNode.right)
    }
  }
  return resCount
}

//利用完全二叉树特性
function countNodes(root: TreeNode | null): number {
  if(root == null) return 0
  let left:number = 0
  let right:number = 0
  let curNode:TreeNode|null = root
  while(curNode!==null){
    left++
    curNode = curNode.left
  }
  curNode = root
  while(curNode!==null){
    right++
    curNode = curNode.right
  }
  if(left == right){ //是满二叉树
    return 2**left - 1
  }
  //不是满二叉树 递归其左右子树
  return 1+countNodes(root.left)+countNodes(root.right)
}