function connect(root: Node | null): Node | null {
  let helperQueue: Node[] = []
  let preNode:Node
  let curNode:Node
  if(root !== null) helperQueue.push(root)
  while(helperQueue.length > 0){
    let length = helperQueue.length
    for(let i = 0; i < length; i++){
      if(i == 0){
        preNode = helperQueue.shift()!
      } else {
        curNode = helperQueue.shift()!
        preNode.next = curNode
        preNode = curNode
      }
      if(preNode.left) helperQueue.push(preNode.left)
      if(preNode.right) helperQueue.push(preNode.right)
    }
    preNode.next = null
  }
  return root
};