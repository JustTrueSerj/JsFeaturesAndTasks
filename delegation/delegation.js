document.querySelector('ul').addEventListener('click', delegation);

function delegation($event) {
    console.log($event.target); //li
    console.log(this); // ul
    console.log(this.parentNode) //body
}