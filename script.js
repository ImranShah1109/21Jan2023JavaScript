
let user = [];

let div = document.querySelector('.box');

let form = document.querySelector('form');
let fname = document.getElementById('name');
let email = document.getElementById('email');
let pswd = document.getElementById('pswd');
let cpswd = document.getElementById('cpswd');
form.addEventListener('submit',validateForm);

let validation;

function validateForm(e){
    e.preventDefault();
    validation = true;
    // console.log(fname.value, email.value, pswd.value, cpswd.value);
    let name = fname.value
    
    if(name.length < 2){
        window.alert("Please Enter proper name");
        validation = false;
    }

    let mail = email.value;
    const mailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    // console.log(mail.match(mailReg));
    if(!mail.match(mailReg)){
        window.alert("Please Enter valid email");
        validation = false;
    }

    let password = pswd.value;
    const pswdReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if(!password.match(pswdReg)){
        window.alert("Passwords should have at least 1 capital letter, 1 small, 1 number and 1 special characters");
        validation = false;
    }
    if(password == name || password == mail){
        window.alert("Password cannot be the same as name or email.");
        validation = false;
    }

    let confirmPassword = cpswd.value;
    if(confirmPassword != password){
        window.alert("Does not match with password");
        validation = false;
    }

        let userObj = {};
        userObj.name = name;
        userObj.email = mail;
        userObj.password = password;
        user.push(userObj);
        console.log(user);

        localStorage.setItem('user', JSON.stringify(user));
        
        window.location.href = "./login.html"        
}
