Замыкания — это функции, ссылающиеся на независимые (свободные) переменные. Другими словами, функция, определённая в замыкании, «запоминает» окружение, в котором она была создана.<br>
Независимые переменные — это все переменные, которые не были переданы как параметры и не были объявлены как локальные.<br> Посмотрим на пример.

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

