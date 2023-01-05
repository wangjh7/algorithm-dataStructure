import {TreeNode} from '../../TreeNode'

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if(postorder.length == 0) return null

  //后序数组的最后一个元素就是二叉树的根节点
  const rootValue:number = postorder.pop()!
  const rootNode:TreeNode = new TreeNode(rootValue)
  const rootValIndex:number = inorder.indexOf(rootValue)


  //切割中序数组 得到中序左数组和中序右数组
  const inorderLeft = inorder.slice(0,rootValIndex)
  const inorderRight = inorder.slice(rootValIndex+1)
  //切割后序数组 得到后序左数组和后序右数组
  const postorderLeft = postorder.slice(0,rootValIndex)
  const postorderRight = postorder.slice(rootValIndex)

  rootNode.left = buildTree(inorderLeft,postorderLeft)
  rootNode.right = buildTree(inorderRight,postorderRight)

  return rootNode
};