// Your code goes here

window.addEventListener('load', function () {
    alert('Welcome to Fun Bus! Click, scroll and navigate around for surprises! Make sure you keep your console open!');
});

window.addEventListener('resize', function () {
    alert("Make me smaller!")
});

const logoE = document.querySelector('.logo-heading');
logoE.addEventListener('click', function (e) {
    e.target.style.color = 'green';
});

const navE = document.querySelector('.nav');
navE.addEventListener('mouseover', function (e) {
    e.target.style.color = 'crimson';
    setTimeout(function () {
        e.target.style.color = '';
    }, 500);
}, false);

const allH2 = document.querySelector('.intro');
allH2.addEventListener('dblclick', function (e) {
    e.target.style.backgroundColor = 'slategray';
});

const btn1 = document.querySelector(".btn");
const btn1Div = document.querySelector(".destination");

btn1Div.addEventListener("click", function (e) {
    console.log("div-clicked");
});

btn1.addEventListener('click', function (e) {
    console.log("signup 1 clicked");
    e.stopPropagation();
});

const invCont = document.querySelector('.inverse-content');
invCont.addEventListener('mouseenter', function (e) {
    e.target.style.border = '3px dotted black';
    e.target.style.padding = '10px';
});


const funBusImg = document.querySelector(".intro > img");

funBusImg.addEventListener('drag', function (e) {
    e.target.style.transform = 'scale(1.5)'
});

const navi = document.querySelector('.nav'); 

navi.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("clicked on navlink");
    });