import {sayHello, doThis} from "./functions.js";

const inner = document.querySelector(".body-inner")
const input = document.querySelector("input")
const button = document.querySelector("button")

// button.addEventListener('click', (ev) => {
//     doThis(inner, input.value)
// })

let randInt = Math.floor(Math.random()*4)
let items = [
    {imgSrc: "./images/slides/choc-strawb.png",title: "Chocolate Strawberry Platter"},
    {imgSrc: "./images/slides/gourmet-muff.png",title: "Gourmet Muffin Platter"},
    {imgSrc: "./images/slides/mini-mering.png",title: "12 Pack Mini Meringues"},
    {imgSrc: "./images/slides/vegan-platter.png",title: "24 Pack Vegan Paleo Platter"},
]

window.addEventListener('scroll', function () {
    reveal()
});

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 0;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
};