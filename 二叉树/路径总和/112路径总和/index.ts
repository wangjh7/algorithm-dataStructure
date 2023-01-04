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

//迭代法
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  type Pair = {
    node:TreeNode,
    sum:number,
  }
  const helperStack:Pair[] =  []
  if(root !== null) helperStack.push({node:root,sum:root.val})
  let tempPair:Pair
  while(helperStack.length > 0){
    tempPair = helperStack.pop()!
    if(tempPair.node.left === null && tempPair.node.right === null && tempPair.sum === targetSum) {
      return true
    }
    if(tempPair.node.right !== null){
      helperStack.push({
        node:tempPair.node.right,
        sum:tempPair.node.right.val + tempPair.sum,
      })
    }
    if(tempPair.node.left !== null){
      helperStack.push({
        node:tempPair.node.left,
        sum:tempPair.node.left.val + tempPair.sum,
      })
    }
  }
  return false
}