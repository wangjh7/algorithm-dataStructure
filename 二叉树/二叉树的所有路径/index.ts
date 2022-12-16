import {TreeNode} from '../TreeNode'

//递归法
function binaryTreePaths(root: TreeNode | null): string[] {
  let result:string[] = []
  //1.确定递归函数，函数参数及返回值
  const getPath = function (node:TreeNode,curPath:string):void{
    //2.确定终止条件，到达叶子节点就终止
    if(node.left == null && node.right == null){
      curPath+=node.val
      result.push(curPath)
      return
    }
    //确定单层递归逻辑
    curPath += node.val + "->"
    node.left&&getPath(node.left,curPath)
    node.right&&getPath(node.right,curPath)
  }
  if(root){
    getPath(root,"")
  }
  return result
};

//迭代法
function binaryTreePaths(root: TreeNode | null): string[] {
  let helperStack:TreeNode[] = []
  let tempNode:TreeNode
  let routeArr:string[] = []
  let resArr:string[] = []
  if(root !== null){
    helperStack.push(root)
    routeArr.push(String(root.val))
  }
  while(helperStack.length>0){
    tempNode = helperStack.pop()!
    let route:string = routeArr.pop()!
    if(tempNode.left==null && tempNode.right==null){
      resArr.push(route)
    }
    if(tempNode.right !== null){
      helperStack.push(tempNode.right)
      routeArr.push(route+'->'+tempNode.right.val)
    }
    if(tempNode.left !== null){
      helperStack.push(tempNode.left)
      routeArr.push(route+"->"+tempNode.left.val)
    }
  }
  return resArr
}