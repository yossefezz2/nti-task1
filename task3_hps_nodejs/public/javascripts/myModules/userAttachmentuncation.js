import userFuncation from "./users.js";
class userAttachmentuncation {
    static removeTable() {
        window.location.reload();
    }
    static readTable(users,arrayForm) {
        let tbodyTable = document.getElementById("tbody")
        let tUsers = arrayForm
    
        users.forEach((rowData, i) => {
    
            let tr = document.createElement("tr")
            tUsers.forEach((cellData) => {
                let td = document.createElement("td")
                td = document.createElement("td")
                td.textContent = users[i][cellData];
                tr.appendChild(td)
            })
            let td = document.createElement("td")
            tr.appendChild(td)
    
    
            let btnEdit = document.createElement("button")
            btnEdit.textContent = "Edit Balance"
            btnEdit.classList.add("btn", "btn-primary", "margin-l-6")
            btnEdit.setAttribute("id", "btn-edit");
            btnEdit.setAttribute("name", users[i]["userId"]);
            td.appendChild(btnEdit)
            td.classList.add("td-form")
    
    
            let btnDelete = document.createElement("button")
            btnDelete.textContent = "Delete User"
            btnDelete.classList.add("btn", "btn-danger", "margin-l-6")
            btnDelete.setAttribute("id", "btn-delete");
            btnDelete.setAttribute("name", users[i]["userId"]);
            td.appendChild(btnDelete)
            tr.appendChild(td)
    
            tbodyTable.appendChild(tr);
        })
    }
    static render(users){
        if (users.length > 0) {
            let edit = document.getElementById('btn-edit')
            edit.addEventListener("click", (e) => {
                userFuncation.edit(e, users);
            });
    
            let deleteItem = document.getElementById('btn-delete')
            deleteItem.addEventListener("click", (e) => {
                console.log(e);
                userFuncation.delete(e, users);
            });
    
        }
    }
    static checkUniqueID(id,users) {
        let checkArray = users
        const element = document.querySelector('.alarete');
        if (checkArray.length == 0) {
            if (element.classList.contains("alarete-display-block")) {
                element.classList.remove("alarete-display-block")
                element.classList.add("alarete-display-none")
            }
            return 1;
        }
        else if (checkArray.findIndex((item) => item.userId == id) != -1) {
    
            element.classList.remove("alarete-display-none")
            element.classList.add("alarete-display-block")
            return 0;
        }
        else {
            if (element.classList.contains("alarete-display-block")) {
                element.classList.remove("alarete-display-block")
                element.classList.add("alarete-display-none")
            }
    
            return 1;
        }
    }
}
export default userAttachmentuncation