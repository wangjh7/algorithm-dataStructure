import {TreeNode} from '../TreeNode'

//递归法
function sortedArrayToBST(nums: number[]): TreeNode | null {
  function recur(nums:number[],left:number,right:number):TreeNode|null{
    if(left > right) return null
    let mid:number = Math.floor((left+right)/2)
    const root:TreeNode = new TreeNode(nums[mid])
    root.left = recur(nums,left,mid - 1)
    root.right = recur(nums,mid + 1,right)
    return root
  }
  return recur(nums,0,nums.length - 1)
};

//迭代法
function sortedArrayToBST(nums: number[]): TreeNode | null {
  if(nums.length == 0) return null

  let root:TreeNode = new TreeNode(0)
  let nodeQueue:TreeNode[] = [root]
  let leftQueue:number[] = [0]
  let rightQueue:number[] = [nums.length - 1]

  while(nodeQueue.length){
    let curNode:TreeNode = nodeQueue.pop()!
    let left:number = leftQueue.pop()!
    let right:number = rightQueue.pop()!
    let mid:number = left + Math.floor((right - left) / 2)

    curNode.val = nums[mid]

    if(left <= mid - 1){
      curNode.left = new TreeNode(0)
      nodeQueue.push(curNode.left)
      leftQueue.push(left)
      rightQueue.push(mid - 1)
    }
    if(right >= mid + 1){
      curNode.right = new TreeNode(0)
      nodeQueue.push(curNode.right)
      leftQueue.push(mid + 1)
      rightQueue.push(right)
    }
  }
  return root
}