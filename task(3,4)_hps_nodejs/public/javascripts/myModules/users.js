
import userAttachment from "./userAttachmentuncation.js";
class userFuncation {
    static add(e, users, arrayForm) {
        try {
            if (userAttachment.checkUniqueID(e.target.elements["userId"].value, users)) {
                console.log(e.target.elements);
                let newUser = {}
                arrayForm.forEach((item) => {
                    newUser[item] = e.target.elements[item].value
                })
                users.push(newUser)
                localStorage.setItem('users', JSON.stringify(users))
                userAttachment.removeTable()
                userAttachment.readTable()
            }
        } catch (err) {
            console.log(err)
        }
    }
    static show() {
        // try {
        //     let allUsers = fileBase.read()
        //     if (allUsers.length > 0) {
        //         allUsers.forEach(element => {
        //             console.log(chalk.green(`${element.userName} - ${element.age} - ${element.email}- ${element.id}`));
        //         });
        //     } else {
        //         throw new Error("not found users")
        //     }
        // } catch (err) {
        //     console.log(chalk.blue.bgRed.bold(err))
        // }
    }

    static single(id) {
        // try {
        //     let allUsers = fileBase.read()
        //     // console.log(allUsers);
        //     if (allUsers.length > 0) {
        //         if (allUsers.findIndex((item) => item.id == id) != -1) {
        //             allUsers.findIndex((item) => {
        //                 if (item.id == id) {
        //                     console.log(chalk.green(`${item.userName} - ${item.age} - ${item.email}- ${item.id}`))
        //                 }
        //             })
        //         }
        //     }
        //     else {
        //         throw new Error("not found users")
        //     }
        // } catch (err) {
        //     console.log(chalk.blue.bgRed.bold(err))
        // }
    }

    static edit(e, users) {
        try {
            e.preventDefault();
            let editId = parseInt(e.target.attributes.name.nodeValue)
            console.log(editId);
            let newBalance = parseFloat(prompt("please enter a balance"))
            let objIndex = users.findIndex((obj => parseInt(obj.userId) == editId));
            users[objIndex].userBalance = newBalance
            localStorage.setItem('users', JSON.stringify(users))
            userAttachment.removeTable()
            userAttachment.readTable()

        } catch (err) {
            console.log(err)
        }
    }

    static delete(e, users) {
        try {
            e.preventDefault();
            let deleteId = parseInt(e.target.attributes.name.nodeValue)
            console.log(deleteId);
            let objIndex = users.findIndex((obj => parseInt(obj.userId) == deleteId));
            users.splice(objIndex, 1)
            localStorage.setItem('users', JSON.stringify(users))
            userAttachment.removeTable()
            userAttachment.readTable()

        } catch (err) {
            console.log(err)

        }
    }

}

export default userFuncation