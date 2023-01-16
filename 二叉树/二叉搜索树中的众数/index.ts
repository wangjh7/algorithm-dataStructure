import {TreeNode} from '../TreeNode'

//递归
//既然是搜索树，它中序遍历就是有序的。
function findMode(root: TreeNode | null): number[] {
  let preNode:TreeNode|null = null
  let maxCount:number = 0
  let count:number = 0
  let resArr:number[] = []
  function traverse(root:TreeNode|null):void{
    if(root===null) return
    traverse(root.left)
    if(preNode == null) { //第一个节点
      count = 1
    } else if (preNode.val == root.val){
      count++
    } else {
      count = 1
    }
    if(count === maxCount){
      resArr.push(root.val)
    } else if (count > maxCount){
      maxCount = count
      resArr.length = 0
      resArr.push(root.val)
    }
    preNode = root
    traverse(root.right)
  }
  traverse(root)
  return resArr
};

//迭代法
function findMode(root: TreeNode | null): number[] {
  const helperStack:TreeNode[] = []
  const resArr:number[] = []
  let maxCount:number = 0
  let count:number = 0
  let preNode:TreeNode|null = null
  let curNode:TreeNode|null = root
  while(curNode !== null || helperStack.length > 0){
    if(curNode !== null){
      helperStack.push(curNode)
      curNode = curNode.left
    } else {
      curNode = helperStack.pop()!
      if(preNode === null){ //第一个节点
        count = 1
      } else if (preNode.val == curNode.val){
        count++
      } else {
        count = 1
      }

      if(count == maxCount){
        resArr.push(curNode.val)
      } else if (count > maxCount){
        maxCount = count
        resArr.length = 0
        resArr.push(curNode.val)
      }
      preNode = curNode
      curNode = curNode.right
    }
  }
  return resArr
}