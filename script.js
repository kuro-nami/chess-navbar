let play = document.getElementById('play');

let playhoverlinks = document.getElementById('play-hover-links');

let delayTimeout;

play.addEventListener('mouseover', () => {
    playhoverlinks.style.display = 'flex';
});

play.addEventListener('mouseout', () => {
    playhoverlinks.style.display = 'none';
});

playhoverlinks.addEventListener('mouseover', () => {
    playhoverlinks.style.display = 'flex';
});

playhoverlinks.addEventListener('mouseout', () => {
    playhoverlinks.style.display = 'none';
});

let navdiv = document.getElementById('nav-div');
let barsicon = document.getElementById('bars-icon');
let crossicon = document.getElementById('cross-icon');


function barsclick() {
    navdiv.style.left = '0';
    barsicon.style.display = 'none';
    crossicon.style.display = 'flex';
};

function crossclick() {
    navdiv.style.left = '-50vw';
    barsicon.style.display = 'flex';
    crossicon.style.display = 'none';
};