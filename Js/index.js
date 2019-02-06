// DOM event to change contact icons and buttons on mouse hover or click

// login button
let loginColor = document.querySelector('.login-button');
loginColor.addEventListener('click', e => {
loginColor.style.backgroundColor = "black";
loginColor.style.color = white;
});

let LoginFontColor = document.querySelector('.login-button');
LoginFontColor.addEventListener('click', e => {
LoginFontColor.style.color = "white";
});

// signUp button
let signUpColor = document.querySelector('.sign-up-btn');
signUpColor.addEventListener('click', e => {
signUpColor.style.backgroundColor = "black";
signUpColor.style.color = white;
});

let signUpFontColor = document.querySelector('.sign-up-btn');
signUpFontColor.addEventListener('click', e => {
signUpFontColor.style.color = "white";
});


// email
let changeIconColor = document.querySelector('.fa-envelope-open');
changeIconColor.addEventListener('mouseover', e => {
changeIconColor.style.color = "white";
});

let regColor = document.querySelector('.fa-envelope-open');
regColor.addEventListener('mouseout', e => {
regColor.style.color = "black";
});

// phone
let changeIconColor2 = document.querySelector('.fa-mobile-alt');
changeIconColor2.addEventListener('mouseover', e => {
changeIconColor2.style.color = "white";
});

let regColor2 = document.querySelector('.fa-mobile-alt');
regColor2.addEventListener('mouseout', e => {
regColor2.style.color = "black";
});


// map
let changeIconColor3 = document.querySelector('.fa-map-marker-alt');
changeIconColor3.addEventListener('mouseover', e => {
changeIconColor3.style.color = "white";
});

let regColor3 = document.querySelector('.fa-map-marker-alt');
regColor3.addEventListener('mouseout', e => {
regColor3.style.color = "black";
});



// slideshow of objects in array

const slideshow = [
    slide0 = {
        id: 1, 
        img: 'images/img1.jpg',
        caption: 'Feed Kids',
    },
    slide1 = {
        id: 1, 
        img: 'images/img1.jpg',
        caption: 'Nobody wants hangry kids',
    },
    slide2 = {
        id: 1, 
        img: 'images/img1.jpg',
        caption: 'Starving kids is bad',
    },
    slide4 = {
        id: 1, 
        img: 'images/img1.jpg',
        caption: 'Do the teachers a favor here',
    }
];

