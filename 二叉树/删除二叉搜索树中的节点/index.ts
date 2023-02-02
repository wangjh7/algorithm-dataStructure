import {TreeNode,} from '../TreeNode'

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if(root == null) return null //第一种情况：没找到要删除的节点
  if(root.val == key){
    if(root.left == null && root.right == null) return null //第二种情况：左右孩子都为空（叶子节点），直接删除节点， 返回NULL为根节点
    if(root.left == null) return root.right //第三种情况：左孩子为空 删除节点 右孩子补位
    if(root.right == null) return root.left //第四种情况：右孩子为空 删除节点 左孩子补位
    //第五种情况：左右孩子节点都不为空，则将删除节点的左子树放到删除节点的右子树的最左面节点的左孩子的位置 并返回删除节点右孩子为新的根节点。
    let curNode:TreeNode = root.right
    while(curNode.left !== null){
      curNode = curNode.left
    }
    curNode.left = root.left
    return root.right
  }
  if(root.val > key) root.left = deleteNode(root.left,key)
  if(root.val < key) root.right = deleteNode(root.right,key)
  return root
};


function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  function removeTargetNode(root:TreeNode):TreeNode|null{
    if(root.left == null && root.right == null) return null
    if(root.left == null) return root.right
    if(root.right == null) return root.left
    let curNode:TreeNode = root.right
    while(curNode.left!==null){
      curNode = curNode.left
    }
    curNode.left = root.left
    return root.right
  }
  let preNode:TreeNode|null = null
  let curNode:TreeNode|null = root
  while(curNode !== null){
    if(curNode.val == key) break
    preNode = curNode
    if(curNode.val > key){
      curNode = curNode.left
    } else {
      curNode = curNode.right
    }
  }
  if(curNode == null) return root
  if(preNode == null){ //删除根节点
    return removeTargetNode(curNode)
  }
  if(preNode.val > key){
    preNode.left = removeTargetNode(curNode)
  } else {
    preNode.right = removeTargetNode(curNode)
  }
  return root
}