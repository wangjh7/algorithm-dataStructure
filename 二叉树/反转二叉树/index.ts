import {TreeNode} from '../TreeNode'

//递归法
//前序遍历
function invertTree(root: TreeNode | null): TreeNode | null {
  if(root === null) return root
  let tempNode:TreeNode|null = root.left
  root.left = root.right
  root.right = tempNode
  invertTree(root.left)
  invertTree(root.right)
  return root
};
//后序遍历
function invertTree(root: TreeNode | null): TreeNode | null {
  if(root === null) return root
  invertTree(root.left)
  invertTree(root.right)
  let tempNode:TreeNode|null = root.left
  root.left = root.right
  root.right = tempNode
  return root
}
//中序遍历
function invertTree(root: TreeNode | null): TreeNode | null {
  if(root === null) return root
  invertTree(root.left)
  let tempNode:TreeNode|null = root.left
  root.left = root.right
  root.right = tempNode
  //因为左右节点已经进行交换，此时的root.left是原来的root.right
  invertTree(root.left)
  return root
}

//迭代法
//栈模拟 前序遍历
function invertTree(root: TreeNode | null): TreeNode | null {
  let helperStack:TreeNode[] = []
  let curNode:TreeNode
  let tempNode:TreeNode|null
  if(root !== null) helperStack.push(root)
  while(helperStack.length > 0){
    curNode = helperStack.pop()!
    if(curNode.right) helperStack.push(curNode.right)
    if(curNode.left) helperStack.push(curNode.left)
    tempNode = curNode.left
    curNode.left = curNode.right
    curNode.right = tempNode
  }
  return root
}

//栈模拟 中序遍历
function invertTree(root: TreeNode | null): TreeNode | null {
  let helperStack:(TreeNode|null)[] = []
  let curNode:TreeNode|null
  let tempNode:TreeNode|null
  if(root !== null) helperStack.push(root)
  while(helperStack.length > 0){
    curNode = helperStack.pop()!
    if(curNode !== null){
      if(curNode.right !== null) helperStack.push(curNode.right)
      helperStack.push(curNode)
      helperStack.push(null)
      if(curNode.left !== null) helperStack.push(curNode.left)
    } else {
      curNode = helperStack.pop()!
      tempNode = curNode.left
      curNode.left = curNode.right
      curNode.right = tempNode
    }
  }
  return root
}
//栈模拟 后序遍历
function invertTree(root: TreeNode | null): TreeNode | null {
  let helperStack:(TreeNode|null)[] = []
  let curNode:TreeNode|null
  let tempNode:TreeNode|null
  if(root !== null) helperStack.push(root)
  while(helperStack.length > 0){
    curNode = helperStack.pop()!
    if(curNode !== null){
      helperStack.push(curNode)
      helperStack.push(null)
      if(curNode.right !== null) helperStack.push(curNode.right)
      if(curNode.left !== null) helperStack.push(curNode.left)
    } else {
      curNode = helperStack.pop()!
      tempNode = curNode.left
      curNode.left = curNode.right
      curNode.right = tempNode
    }
  }
  return root
}

//队列模拟 层序遍历
function invertTree(root: TreeNode | null): TreeNode | null {
  const helperQueue:TreeNode[] = []
  let curNode:TreeNode
  let tempNode:TreeNode|null
  if(root !== null) helperQueue.push(root)
  while(helperQueue.length > 0){
    let length = helperQueue.length
    for(let i = 0; i < length; i++){
      curNode = helperQueue.shift()!
      tempNode = curNode.left
      curNode.left = curNode.right
      curNode.right = tempNode
      if(curNode.left !== null) helperQueue.push(curNode.left)
      if(curNode.right !== null) helperQueue.push(curNode.right)
    }
  }
  return root
}