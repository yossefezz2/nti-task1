import userFuncation from "./myModules/users.js";
import userAttachment from "./myModules/userAttachmentuncation.js";
let arrayForm = ["userId", "userName", "userEmail", "userBalance"]
let localStorageData = JSON.parse(localStorage.getItem('users'))
let users

if (localStorageData) {
    users = localStorageData
}
else {
    users = []
}
userAttachment.readTable(users, arrayForm)
if (users.length > 0) {
    userAttachment.render(users)
}
let form = document.getElementById('form-id')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    userFuncation.add(e, users, arrayForm)
    userAttachment.render(users)

});
