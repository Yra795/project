"use strict"

console.log(3)


function valid (form){
    var fail = false;
    var email = form.email.value;
    var password = form.password.value;
    var rePassword = form.rePassword.value;
    if (email == "")
        fail ="Не верный email";
    else if (password == "")
        fail = "Не верный пароль";
    else if (rePassword != rePassword)
        fail = "Пароли не совпадают";
        
        alert(fail);
} 
