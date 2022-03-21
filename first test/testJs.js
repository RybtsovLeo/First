
// alert('dnbdndndn')
// let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// abc.length
// function onClick(){
//     let data = document.getElementById('inputBar').value
//     let splited = data.split('')
//     for (let i = 0; i < splited.length; i++) {
//         let indexOfChar = abc.indexOf(splited[i]);
//         let finChar = indexOfChar - 3;
//         if (finChar < 0){
//             finChar += 26
//         }
//         document.write(abc[finChar])
//     }
// }
const admin = {
    login: 'admin',
    password: '1111',
}
const user1 = {
    login: 'user',
    password: '2222',
}

const hahacker = {
    login: 'hahacker',
    password: '1234',
}

let users = [admin, user1, hahacker];

function onLogin(){
    let mass = '0123456789'
    let inputLogin = document.getElementById('userLogin').value
    let inputPassword = document.getElementById('userPassword').value
    let a1 = mass.slice(0,1)
    let a2 = mass.substring(0,2)
    let a3 = mass.slice(1,2)
    console.log(a1)
    console.log(a2)
    console.log(a3)

    let user = users.find(x => x.login === inputLogin);
    if (user){
        let isPasswordCorrect = inputPassword === user.password
        if (isPasswordCorrect === true) {
            document.write("Password is correct")
            return
        }
        document.write("Password is incorrect")
        return
    }
    document.write("User not found")


}


function setNewPassword() {
    let inputLogin = document.getElementById('userLogin2').value;
    let user = users.find(x => x.login === inputLogin);
    if (user){
        let inputOldPassword = document.getElementById('oldPassword').value;
        let inputNewPassword = document.getElementById('newPassword').value;

        let isUserPasswordCorrect = user.password === inputOldPassword;
        if (isUserPasswordCorrect === true) {
            user.password = inputNewPassword
            closeForm()
        }
        return;

    }


}

function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("body").style.display = "none";

}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("body").style.display = "flex";

}




