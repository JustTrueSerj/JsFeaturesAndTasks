// 1. Пример - Не верный вариант
for (var i=1; i<=5; i++) {
    setTimeout( function timer(){
        console.log(i);
    }, i*1000 );
}

//1. Пример - Верный вариант
for (var i = 1; i <= 5; i++) {
    (function (i) {
        setTimeout(function timer() {
            console.log(i);
        }, i * 1000)
    })(i);
}

//2. Пример - Неверно (хитрый пример)
function closure(number){
    var array = [];

    function push(x){
        array.push(function(){
            return x;
        });
    }

    for (var i = 0 ; i < number ; i++){
        push(i);
    }

    return array;

};

// 2. Пример - Верно
function closure(number) {
    var array = [];

    function push(x) {
        array.push(x);
    }

    for (var i = 0; i < number; i++) {
        push(i);
    }

    return array;

}
console.log(closure(3));

// Пример замыкания для авторизации пользователя (Верный пример работы замыкания)
function authorizationSomeGroup(correctPassword) {
    return function (password) {
        if (password === correctPassword) {
            return true
        } else {
            return false
        }
    }
}

var authorizationMemberOfSomeGroup = authorizationSomeGroup('pass123');

console.log(authorizationMemberOfSomeGroup('pass12')); //false
console.log(authorizationMemberOfSomeGroup('pass123')); //true
console.log(authorizationMemberOfSomeGroup('pass1231')); //false

// Генератор чисел (Верный пример работы замыкания)
function numberGenerator() {
    // Local “free” variable that ends up within the closure
    var num = 1;
    function checkNumber() {
        console.log(num);
    }
    num++;
    return checkNumber;
}

var number = numberGenerator();
number(); // 2

// --------------------- Скажи привет (Верный пример работы замыкания)

function sayHello() {
    var say = function() { console.log(hello); }
    // Local variable that ends up within the closure
    var hello = 'Hello, world!';
    return say;
}
var sayHelloClosure = sayHello();
sayHelloClosure(); // ‘Hello, world!’

// ---------------------- Выведи все корректно (Верный пример работы замыкания)

var result = [];

for (var i = 0; i < 5; i++) {
   result[i] = (function (x) {
       return function () {
           console.log(x)
       }
   })(i)
}

result[0](); // 5, expected 0
result[1](); // 5, expected 1
result[2](); // 5, expected 2
result[3](); // 5, expected 3
result[4](); // 5, expected 4




