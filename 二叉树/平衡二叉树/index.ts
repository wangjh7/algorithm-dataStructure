import {TreeNode} from '../TreeNode'

//求高度使用后序遍历
function isBalanced(root: TreeNode | null): boolean {
  //返回-1 表示已经不是平衡二叉树了，否则返回值是以该节点为根节点树的高度
  const getDepth = function (node:TreeNode|null):number{
    if(node==null){
      return 0
    }
    let leftHeight:number = getDepth(node.left)
    if(leftHeight == -1) return -1 //左子树不为平衡二叉树
    let rightHeight:number =getDepth(node.right)
    if(rightHeight == -1) return -1 //右子树不为平衡二叉树

    //左右子树高度差大于1
    if(Math.abs(leftHeight - rightHeight) > 1){
      return -1
    } else {
      return 1 + Math.max(leftHeight,rightHeight)
    }
  }
  return getDepth(root) !== -1
}