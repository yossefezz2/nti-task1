const deal =require("./app/helper/dealWithJson.helper")
let data =[{id:55,name:"ahmed"}]
deal.write(data)
const read = deal.readfile()
console.log(read)