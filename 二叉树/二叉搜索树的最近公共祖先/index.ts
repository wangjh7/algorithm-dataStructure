import {TreeNode,} from '../TreeNode'


//递归法
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if(root === null) return root
  if(p == null || q == null) return null

  if(root.val > p.val && root.val > q.val){ //最近公共祖先在左子树上
    const left:TreeNode|null = lowestCommonAncestor(root.left,p,q)
    if(left != null){
      return left
    }
  } 

  if(root.val < p.val && root.val < q.val){ //最近公共祖先在右子树上
    const right:TreeNode|null = lowestCommonAncestor(root.right,p,q)
    if(right != null){
      return right
    }
  }

  // q.val <= root.val <= p.val 或者 p.val <= root.val <= q.val
  return root
};


//迭代法
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if(p == null || q == null) return null
  while(root){
    if(root.val > p.val && root.val > q.val){
      root = root.left
    } else if (root.val < p.val && root.val < q.val){
      root = root.right
    } else {
      return root
    }
  }
  return null
}