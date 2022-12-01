function levelOrder(root: Node | null): number[][] {
	let helperQueue:Node[] = []
  let resArr:number[][] = []
  let tempArr:number[] = []
  if(root !== null){
    helperQueue.push(root)
  }
  let curNode:Node
  while(helperQueue.length){
    let length = helperQueue.length
    for(let i = 0; i < length; i++){
      curNode = helperQueue.shift()!
      tempArr.push(curNode.val)
      helperQueue.push(...curNode.children)
    }
    resArr.push(tempArr)
    tempArr = []
  }
  return resArr
};