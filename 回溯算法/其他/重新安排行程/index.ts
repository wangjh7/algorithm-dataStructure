function findItinerary(tickets: string[][]): string[] {
  /**
      TicketsMap 实例：
      { NRT: Map(1) { 'JFK' => 1 }, JFK: Map(2) { 'KUL' => 1, 'NRT' => 1 } }
      这里选择Map数据结构的原因是：与Object类型的一个主要差异是，Map实例会维护键值对的插入顺序。
   */
  type TicketsMap = {
    [index:string] : Map<string,number>
  }
  // tickets.sort((a,b)=>{
  //   return ( a[1].charCodeAt(0) - b[1].charCodeAt(0))
  // })
  tickets.sort((a, b) => {
    return a[1] < b[1] ? -1 : 1;
  });
  const ticketsMap:TicketsMap = {}
  for(const [from,to] of tickets){
    if(ticketsMap[from] == undefined){
      ticketsMap[from] = new Map()
    }
    ticketsMap[from].set(to,(ticketsMap[from].get(to) || 0) + 1)
  }
  const resRoute:string[] = ["JFK"]
  backtracking(tickets.length,ticketsMap,resRoute)
  return resRoute
  function backtracking(ticketNum:number,ticketsMap:TicketsMap,route:string[]):boolean{
    if(route.length == ticketNum + 1) return true
    const targetMap = ticketsMap[route[route.length - 1]]
    if(targetMap !== undefined){
      for(const [to,count] of targetMap.entries()){
        if(count > 0){
          route.push(to)
          targetMap.set(to,count - 1)
          if(backtracking(ticketNum,ticketsMap,route) == true) return true
          targetMap.set(to,count)
          route.pop()
        }
      }
    }
    return false
  }
};