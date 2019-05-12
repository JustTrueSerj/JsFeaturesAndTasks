document.querySelector('#i1').onclick = function () {
    console.log(1);
};
document.querySelector('#i2').onclick = function () {
    console.log(2);
};
document.querySelector('#i3').onclick = function ($event) {

    console.log(this);
    console.log($event);
    $event.stopPropagation(); // остановка всплытия событий
};


