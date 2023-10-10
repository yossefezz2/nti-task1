let arrayForm = ["userId", "userName", "userEmail", "userBalance"]
let localStorageData = JSON.parse(localStorage.getItem('users'))
let users

if (localStorageData) {
    users = localStorageData
}
else {
    users = []
}
readTable()
if (users.length > 0) {
    render()
}
let form = document.getElementById('form-id')
form.addEventListener('submit', (e) => {

    addUser(e)
    render()

});
function render() {
    if (users.length > 0) {
        let edit = document.getElementById('btn-edit')
        edit.addEventListener("click", (e) => {
            editUser(e);
        });

        let deleteItem = document.getElementById('btn-delete')
        deleteItem.addEventListener("click", (e) => {
            console.log(e);
            deleteUser(e);
        });

    }
}


function readTable() {
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
function removeTable() {
    window.location.reload();
}
function checkUniqueID(id) {
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
function addUser(e) {
    e.preventDefault();
    if (checkUniqueID(e.target.elements["userId"].value)) {
        console.log(e.target.elements);
        let newUser = {}
        arrayForm.forEach((item) => {
            newUser[item] = e.target.elements[item].value
        })
        users.push(newUser)
        localStorage.setItem('users', JSON.stringify(users))
        removeTable()
        readTable()
    }
}
function editUser(e) {
    e.preventDefault();
    let editId = parseInt(e.target.attributes.name.nodeValue)
    console.log(editId);
    let newBalance = parseFloat(prompt("please enter a balance"))
    let objIndex = users.findIndex((obj => parseInt(obj.userId) == editId));
    users[objIndex].userBalance = newBalance
    localStorage.setItem('users', JSON.stringify(users))
    removeTable()
    readTable()
}
function deleteUser(e) {
    e.preventDefault();
    let deleteId = parseInt(e.target.attributes.name.nodeValue)
    console.log(deleteId);
    let objIndex = users.findIndex((obj => parseInt(obj.userId) == deleteId));
    users.splice(objIndex, 1)
    localStorage.setItem('users', JSON.stringify(users))
    removeTable()
    readTable()
}