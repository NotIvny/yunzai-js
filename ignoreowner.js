const ownerList = ["123456789","987654321"]
const passedList = ["123456789","987654321"]
export class owner extends plugin {
    constructor() {
      super({
        name: "隐藏主人",
        dsc: "隐藏主人",
        event: "message",
        priority: -50000000,
        rule: [
          {
            /** 命令正则匹配 */
            reg: "^(.*)",
            /** 执行方法 */
            fnc: "setOwner",
            log: false,
          }
        ]
      })
    }
  async setOwner(e){
    if(e.isMaster){
      return false
    }
    if(ownerList.indexOf(e.user_id.toString()) != -1){
        e.isMaster = true
        return false
    }
    if(ownerList.indexOf(e.user_id.toString()) != -1){
      const ownerCommandList = ["#刷新排名","#重置排名"]
      if(ownerCommandList.indexOf(e.msg) != -1){
        e.isMaster = true
        return false
      }
    }
    return false
  }
}