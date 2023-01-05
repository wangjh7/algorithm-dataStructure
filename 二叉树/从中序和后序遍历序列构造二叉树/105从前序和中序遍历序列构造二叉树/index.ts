import {TreeNode} from '../../TreeNode'

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if(preorder.length === 0) return null
  const rootValue:number = preorder[0]
  const rootNode:TreeNode = new TreeNode(rootValue)
  const rootIndex:number = inorder.indexOf(rootValue)

  rootNode.left = buildTree(preorder.slice(1,rootIndex+1),inorder.slice(0,rootIndex))
  rootNode.right = buildTree(preorder.slice(rootIndex+1),inorder.slice(rootIndex+1))
  return rootNode
};