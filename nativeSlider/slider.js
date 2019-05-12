//ES5 Code with clossure

window.onload = autoSlide;

function autoSlide() {
    var counter = setInterval(slideIt(), 1000);
    console.log(counter);
    setTimeout(function () {
       clearInterval(counter);
    }, 5000)
}

document.getElementById('sliderLeft').onclick = slideIt();

function slideIt(state) {
    state = 256;
    return function () {
        var polosa = document.getElementById('polosa');
        if (state > 768) {
            state = 0
        }
        polosa.style.left = -state + 'px'; // left работает только с position
        state += 256;
    }
}

