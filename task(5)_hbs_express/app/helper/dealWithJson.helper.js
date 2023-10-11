
const fs = require("fs")
class dealWithJson {

    static readfile(path = "moudle/users.json") {
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
    static write(contact,path = "moudle/users.json") {
        try {
            
            fs.writeFileSync(`${path}`, JSON.stringify(contact))
        } catch (e) {
            console.log(e);
        }
    }
    static pop(obj, key) {
        const value = obj[key];
        delete obj[key];
        return value;
    }
}

module.exports = dealWithJson