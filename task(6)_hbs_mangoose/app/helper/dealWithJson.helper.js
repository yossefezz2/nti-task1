
const fs = require("fs")
class dealWithJson {

    static readfile(path = "moudle/file.json") {
        let allUsers
        try {

            allUsers = JSON.parse(fs.readFileSync(`${path}`))
            if (!Array.isArray(allUsers)) {
                throw new error("it is not array")  
              }
            
        } catch (e) {
             allUsers = []
        }
        return allUsers
    }
    static write(contact,path = "moudle/file.json") {
        try {
            
            fs.writeFileSync(`${path}`, JSON.stringify(contact))
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = dealWithJson