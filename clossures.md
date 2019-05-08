Замыкания — это функции, ссылающиеся на независимые (свободные) переменные. Другими словами, функция, определённая в замыкании, «запоминает» окружение, в котором она была создана.<br>
Независимые переменные — это все переменные, которые не были переданы как параметры и не были объявлены как локальные.<br> Посмотрим на пример.

```javascript
// function numberGenerator() {
//     // Local “free” variable that ends up within the closure
//     var num = 1;
//     function checkNumber() {
//         console.log(num);
//     }
//     num++;
//     return checkNumber;
// }
//
// var number = numberGenerator();
// number(); // 2
```

В примере выше функция numberGenerator создаёт локальную переменную num (число), а также локальную функцию checkNumber (функцию, печатающую num в консоль разработчика).
Локальная функция checkNumber сама по себе не объявляет локальных переменных, но благодаря механизму замыкания ей доступна переменная из внешнего окружения функции numberGenerator.
В результате она может пользоваться переменной num, созданной во время вызова функции numberGenerator, даже после возврата из вызова numberGenerator.

```javascript
function sayHello() {
    var say = function() { console.log(hello); }
    // Local variable that ends up within the closure
    var hello = 'Hello, world!';
    return say;
}
var sayHelloClosure = sayHello();
sayHelloClosure(); // ‘Hello, world!’
```


