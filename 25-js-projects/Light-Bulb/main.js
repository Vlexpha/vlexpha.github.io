let btn = document.querySelector('.btn');
let body = document.querySelector('body');
btn.onclick = function(){
body.classList.toggle('off');
}

var bulb = document.getElementById("bulb");
var button = document.getElementById("switch");
var currentColor;
currentColor = "#FFE900";

var lightsOn = true;

const colorPicker = document.getElementById("light-color");
colorPicker.addEventListener("change", (event) => {
    if (lightsOn === true) {
        currentColor = colorPicker.value;
        console.log(currentColor);
        bulb.style.backgroundColor = currentColor;
    } else {
        currentColor = colorPicker.value;
        console.log(currentColor);
    }

});