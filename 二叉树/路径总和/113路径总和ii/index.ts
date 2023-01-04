import {TreeNode} from '../../TreeNode'

//递归法
function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  function recur(node:TreeNode,sumGap:number,routeArr:number[]):void{
    if(node.left === null && node.right === null && sumGap === 0){
      resArr.push([...routeArr])
    }
    if(node.left !== null){
      sumGap -= node.left.val
      routeArr.push(node.left.val)
      recur(node.left,sumGap,routeArr)
      sumGap += node.left.val
      routeArr.pop()
    }
    if(node.right !== null){
      sumGap -= node.right.val
      routeArr.push(node.right.val)
      recur(node.right,sumGap,routeArr)
      sumGap += node.right.val
      routeArr.pop()
    }
  }
  const resArr:number[][] = []
  if(root == null) return resArr
  const routeArr:number[] = []
  routeArr.push(root.val)
  recur(root,targetSum-root.val,routeArr)
  return resArr
}