import {TreeNode} from '../../二叉树/TreeNode'

function minCameraCover(root: TreeNode | null): number {
  let result:number = 0
  function traverse(cur:TreeNode|null):number{ //0该节点无覆盖 1该节点有摄像头 2 该节点有覆盖
    if(cur == null) return 2 //空节点 该节点有覆盖

    let left:number = traverse(cur.left)
    let right:number = traverse(cur.right)

    /**
     * 情况1
     * 左右子节点都有覆盖
     * 说明该节点无覆盖
     */
    if(left == 2 && right == 2) return 0

    /**
     * 情况2
     * 左右子节点 至少有一个无覆盖
     * left == 0 && right == 0 左右节点无覆盖
     * left == 1 && right == 0 左节点有摄像头，右节点无覆盖
     * left == 0 && right == 1 左节点有无覆盖，右节点摄像头
     * left == 0 && right == 2 左节点无覆盖，右节点覆盖
     * left == 2 && right == 0 左节点覆盖，右节点无覆盖
     * 
     * 说明该节点应该放置摄像头
     */
    if(left == 0 || right == 0){
      result++
      return 1
    }

    /**
     * 情况3
     * 左右子节点 至少有一个有摄像头
     * left == 1 && right == 2 左节点有摄像头，右节点有覆盖
     * left == 2 && right == 1 左节点有覆盖，右节点有摄像头
     * left == 1 && right == 1 左右节点都有摄像头
     * 
     * 说明该节点有覆盖
     */
    if(left == 1 || right == 1){
      return 2
    }

    //逻辑不会走到这里
    return -1
  }

  //情况4
  if(traverse(root) == 0){
    result++
  }
  return result
};