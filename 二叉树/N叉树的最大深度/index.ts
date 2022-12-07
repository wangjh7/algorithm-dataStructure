
//层序遍历
function maxDepth(root: Node | null): number {
  let helperQueue:Node[] = []
  let resDepth:number = 0
  let tempNode:Node
  if(root !== null) helperQueue.push(root)
  while(helperQueue.length > 0){
    resDepth++
    let length = helperQueue.length
    for(let i = 0; i < length; i++){
      tempNode = helperQueue.shift()!
      for(let item of tempNode.children){
        item && helperQueue.push(item)
      }
    }
  }
  return resDepth
};

//递归法
function maxDepth(root: Node | null): number {
  if(root === null) return 0
  let resDepth:number = 0
  for(let node of root.children){
    resDepth = Math.max(resDepth,maxDepth(node))
  }
  return resDepth + 1
}