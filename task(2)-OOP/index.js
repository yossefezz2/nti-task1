    
let localStorageDataStudens = JSON.parse(localStorage.getItem('studens'))
let localStorageDataTeachers = JSON.parse(localStorage.getItem('Teachers'))
let studensArr, TeachersArr

if (localStorageDataStudens) {
    studensArr = localStorageDataStudens
}
else {
    studensArr = []
}
if (localStorageDataTeachers) {
    TeachersArr = localStorageDataTeachers
}
else {
    TeachersArr = []
}
class User {
    static count = 0
    constructor(fname, lname, age, email) {
        this.fname = fname
        this.lname = lname
        this.age = age
        this.email = email
        // this.id = id
        User.count++

    }
    get Name() {
        return `${this.fname} ${this.lname}`
    }
    show() {
        console.log(`${this.fname} ${this.lname}`);
    }
    static methode() {
        return `${User.count}`
    }
}
class student extends User {
    static studens = []

    constructor(fname, lname, age, email, studensArray, grades = []) {

        super(fname, lname, age, email)
        this.studensArray = studensArray
        this.grades = grades
        this.id = this.addId()
        student.studens.push({ userId: this.id, username: this.Name, userAge: age, useremail: email })
    }
    addId() {
        if (student.studens.length > 0) {
            return student.studens[student.studens.length - 1].userId + 1
        }
        else if (this.studensArray.length > 0) {

            return this.studensArray[this.studensArray.length - 1].userId + 1
        }
        else {
            return 1
        }
    }
    set firstName(val) {
        this.fname = val
    }
    addGrade(grade) {
        this.grades.push(grade)
    }
    getStudentByID(id,cb) {
        let searchById = this.studensArray.concat(student.studens)
        if (searchById.findIndex((item) => item.userId == id) != -1) {
            searchById.findIndex((item) => {
                if (item.userId == id) {
                    console.log(item)
                    cb(item)
                   
                }
            })
        }
        else {
            return cb("not found")
        }
    }
    updataLocalStorge() {
        let updloaded = this.studensArray.concat(student.studens)
        localStorage.setItem('studens', JSON.stringify(updloaded))
    }
    showAllStudent() {
        let showAllStudent = this.studensArray.concat(student.studens)
        console.log(showAllStudent);
    }
}

class Teacher extends User {
    static Teachers = []
    constructor(fname, lname, age, email, TeachersArr, subject = []) {
        super(fname, lname, age, email)
        this.TeachersArr = TeachersArr
        this.subject = subject
        this.id = this.addId()
        Teacher.Teachers.push({ userId: this.id, username: this.Name, userAge: age, useremail: email })

    }

    set firstName(val) {
        this.fname = val
    }
    addId() {
        if (Teacher.Teachers.length > 0) {
            return Teacher.Teachers[Teacher.Teachers.length - 1].userId + 1
        }
        else if (this.TeachersArr.length > 0) {

            return this.TeachersArr[this.TeachersArr.length - 1].userId + 1
        }
        else {
            return 1
        }
    }
    getStudentByID(id,cb) {
        let searchById = this.TeachersArr.concat(Teacher.Teachers)
        if (searchById.findIndex((item) => item.userId == id) != -1) {
            searchById.findIndex((item) => {
                if (item.userId == id) {
                    console.log(item)
                    cb(item)
                   
                }
            })
        }
        else {
            return cb("not found")
        }
    }
    updataLocalStorge() {
        let updloaded = this.TeachersArr.concat(Teacher.Teachers)
        localStorage.setItem('Teachers', JSON.stringify(updloaded))
    }
    showAllStudent() {
        let showAllStudent = this.TeachersArr.concat(Teacher.Teachers)
        console.log(showAllStudent);
    }
}
const st1 = new student("ahmed", "yossef", 18, "ahmed@gmail", studensArr)
const st2 = new student("ahmed", "yossef", 18, "ahmed@gmail", studensArr)
const st3 = new student("ahmed", "yossef", 18, "ahmed@gmail", studensArr)
const st4 = new Teacher("ahmed", "yossef", 18, "ahmed@gmail", TeachersArr)
const st5 = new student("ahmed", "yossef", 18, "ahmed@gmail", studensArr)

const st6 = new student("ahmedezzsss", "yossef", 18, "ahmed@gmail", studensArr)

st1.addGrade(60)
st1.addGrade(90)
st1.addGrade(80)
console.log(st1.Name)
st1.firstName = "ali"
st1.show()
st4.updataLocalStorge()
st6.updataLocalStorge()
function prints(item) {
    console.log(item);
}
st4.getStudentByID(5,prints)
st4.showAllStudent()
st6.getStudentByID(3,prints)
st6.showAllStudent()
console.log(User.methode());


