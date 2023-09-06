import {imgDisplay, subContent} from './layout.js';

export function pageLoad() {

    subContent.innerHTML = '';
    
    imgDisplay.classList.add('restaurant');
    subContent.className = 'unique socialMedia';
    const ig = document.createElement('img');
    const fb = document.createElement('img');
    const twitter = document.createElement('img');
    const igContainer = document.createElement('a');
    const fbContainer = document.createElement('a');
    const xContainer = document.createElement('a');

    function changeBg() {
        const restaurantImg = ['url("../src/images/restaurant1.jpg")', 'url("../src/images/restaurant2.jpg")'];
        if (imgDisplay.classList.contains('restaurant')) {
            if (imgDisplay.style.backgroundImage == 'url("../src/images/restaurant1.jpg")') {
                imgDisplay.style.backgroundImage = 'url("../src/images/restaurant2.jpg")'
            } else {
                imgDisplay.style.backgroundImage = 'url("../src/images/restaurant1.jpg")';
            }
        }
    }

    setInterval(changeBg, 7000);
    imgDisplay.style.backgroundImage = 'url("../src/images/restaurant1.jpg"';
    
    ig.src = '../src/images/instagram.svg';
    igContainer.href = 'https://www.instagram.com/nobuaustralia/';
    igContainer.target = '_blank';
    fb.src = '../src/images/facebook.svg';
    fbContainer.href = 'https://facebook.com/';
    fbContainer.target = '_blank';
    twitter.src = '../src/images/logo-x.svg';
    xContainer.href = 'https://twitter.com/Defi_Isaac';
    xContainer.target = '_blank';

    subContent.append(igContainer, fbContainer, xContainer);
    igContainer.appendChild(ig);
    fbContainer.appendChild(fb);
    xContainer.appendChild(twitter);

}