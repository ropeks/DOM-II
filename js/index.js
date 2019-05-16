// Your code goes here

const body = document.body;
const nav = document.querySelector('.nav');
const navbtn = nav.querySelector('a:nth-of-type(1)');
const funBus = document.querySelector('.logo-heading');

// changing the color of the nav a

navbtn.addEventListener('mouseenter', () => {
    navbtn.style.color = '#38A4BA';
});

navbtn.addEventListener('mouseleave', () => {
    navbtn.style.color = '#212529';
});

// is the wheel working?

body.addEventListener('wheel', () => {
    console.log('Wheel is working!');
});

// pressing keys

let i = 0; 
body.addEventListener('keydown', () => {
    i++;
    console.log(i);
});

// make 'fun bus' logo invisible

let canSee = true;
funBus.addEventListener('click', () =>  {
    
    if(canSee) {
        funBus.style.color = '#ffffff';
        canSee = false;
    } else {
        funBus.style.color = '#212529';
        canSee = true;
    }
});

// stopping propagation

nav.addEventListener('wheel', evt => {
    evt.stopPropagation();
});