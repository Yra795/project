"use strict"

console.log(45);

function fib(num){
    let a = 1,
        b = 1;

    for (let i = 3; i <= num; i++) {
        let c = a + b;
            a = b;
            b = c;
    }
    return b;
}
 console.log(fib(10));

//  alert(fib(8));
//  alert(fib(15));
//  alert(fib(68));

// function fib(n) {
//     return n <= 1 ? n : fib(n-1)+fib(n-2);
// }
// console.log(fib(15));



// let userName = prompt ("Пароль?", '');

//     if (userName == '1111') {
//     alert('Пароль верный');
//     }
//     else if (pass == '' || pass == null){
//         alert('Отменено');
//     }
//     else {
//         alert('Неверный пароль');
//     }



// var buttons = document.querySelectorAll('button');

// for (var i = 0; i < buttons.length; i++){
//     buttons[i].onclick = function(x){
//         return function(){
//             console.log(x);
//         }
//     }(i);
// }


// let passport = [
// {
//     name:"Ivan",
//     lastName:"Ivanov",
//     fatherName:"Ivanovich",
//     birdhdate:"01.01.1970",
//     registrationCountry:"Belarus",
//     registracionCity:"Minsk",
//     registracionAddress:"Lenina st.,21",
//     issuedByDepartment:"Leninsky district police department",
//     dateOfIssue:"",
//     validBefore:"",
// },

// {
//     name:"Petia",
//     lastName:"Petrov",
//     fatherName:"Petrovich",
//     birdhdate:"06.09.1990",
//     registrationCountry:"Belarus",
//     registracionCity:"Brest",
//     registracionAddress:"Lenina st.,21",
//     issuedByDepartment:"Leninsky district police department",
//     dateOfIssue:"",
//     validBefore:"",
// }
// ];


// function sortByParam(passportList, paramName){
//     let sortFunc = function(a, b){
//         if (a[paramName] > b[paramName]) {return 1;}
//         if (a[paramName] < b[paramName]) {return -1;}
//         return 0;}
//     return passportList.sort(sortFunc);
// }
// sortByParam(passport, "name"); 


//  passport.sort(function(a, b){
//     if (a.name > b.name) {return 1;}
//     if (a.name < b.name) {return -1;}
//     return 0;
// })
// console.log(passport); 


let reg = /[@]/;

let inp = document.getElementById("email");
let mes = document.getElementById("message");

document.getElementById("btn").onclick = function (e) {
    e.preventDefault();
    if (!validate (reg, inp.value)) {
        notValid(inp, mes, ' Проверка не пройдена ');
    } else {
        valid(inp, mes, '');
    }
    
};

function validate(regex, inp) {
    return regex.test(inp);
}

function notValid(inp, el, message) {
    inp.classList.add('is-invalid');
    el.innerHTML = message;
}

function valid(inp, el, message) {
    inp.classList.remove('is-invalid');
    inp.classList.add('is-valid');
    el.innerHTML = message;
}
