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

function fib(n) {
    return n <= 1 ? n : fib(n-1)+fib(n-2);
}
console.log(fib(15));


// function getNumbersModulatorBy(modulus, loggerCallback) {

//     return function(start, end) {
//         loggerCallback({ message: "Конфигурация", config: configuration });
//         loggerCallback({ message: "Полученный модулятор", modulus: modulus });
//         loggerCallback({
//             message: "Полученный start и end",
//             start: start,
//             end: end
//         });

//         while (start <= end) {
//             if (start % modulus == configuration.isEntry) {
//                 loggerCallback(start);
//             }

//             start++;
//         }
//     };
// }

// var configuration = {
//     modulus: 10,
//     isEntry: false,
//     start: 45,
//     end: 68
// };

// var loggerCallback = data => console.log(data);

// let tenNumbersModulator = getNumbersModulatorBy(
//     configuration.modulus,
//     loggerCallback
// );

// window.configuration.modulus = 5;

// let fiveNumbersModulator = getNumbersModulatorBy(
//     configuration.modulus,
//     loggerCallback
// );

// tenNumbersModulator(configuration.start, configuration.end);
// tenNumbersModulator(10, 50);

// window.configuration.isEntry = true;

// fiveNumbersModulator(configuration.start, configuration.end);
// fiveNumbersModulator(10, 21);


let userName = prompt ("Пароль?", '');

    if (userName == '1111') {
    alert('Пароль верный');
    }
    else if (pass == '' || pass == null){
        alert('Отменено');
    }
    else {
        alert('Неверный пароль');
    }

