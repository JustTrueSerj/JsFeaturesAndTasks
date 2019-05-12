window.onload = function () {
    if (localStorage.getItem('bgcolor') !== null) {
        document.getElementsByTagName('body')[0].style.background = localStorage.getItem('bgcolor');
    }

    document.getElementById('green').onclick = function () {
        document.getElementsByTagName('body')[0].style.background = 'green';
        localStorage.setItem('bgcolor', 'green');
    };

    document.getElementById('red').onclick = function () {
        document.getElementsByTagName('body')[0].style.background = 'red';
        localStorage.setItem('bgcolor', 'red');
    }

};
