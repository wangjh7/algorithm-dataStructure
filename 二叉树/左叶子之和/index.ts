import {TreeNode} from '../TreeNode'

/**
 * 
 * 递归法
 * 递归的遍历顺序为后序遍历（左右中），是因为要通过递归函数的返回值来累加求取左叶子数值之和
 * 
 */
function sumOfLeftLeaves(root: TreeNode | null): number {
  if(root === null) return 0
  let midVal:number = 0
  if(root.left !== null && root.left.left == null && root.left.right == null){ //如果找到左叶子节点
    midVal = root.left.val
  }
  let leftVal:number = sumOfLeftLeaves(root.left)
  let rightVal:number = sumOfLeftLeaves(root.right)
  return midVal + leftVal + rightVal
};

/**
 * 
 * 迭代法
 */
function sumOfLeftLeaves(root: TreeNode | null): number {
  let helperStack:TreeNode[] = []
  let tempNode:TreeNode
  let sum:number = 0
  if(root !== null) helperStack.push(root)
  while(helperStack.length>0){
    tempNode = helperStack.pop()!
    if(tempNode.left !== null && tempNode.left.left === null && tempNode.left.right === null){
      sum += tempNode.left.val
    }
    if(tempNode.right !== null) helperStack.push(tempNode.right)
    if(tempNode.left !== null) helperStack.push(tempNode.left)
  }
  return sum
}