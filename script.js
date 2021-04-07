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



var buttons = document.querySelectorAll('button');

for (var i = 0; i < buttons.length; i++){
    buttons[i].onclick = function(x){
        return function(){
            console.log(x);
        }
    }(i);
}

