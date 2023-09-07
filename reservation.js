import {imgDisplay, subContent} from './layout.js';

export function reservationPage() {
    imgDisplay.style.backgroundImage = 'url("../src/images/food.avif")';
    imgDisplay.className = 'imgDisplay reservation';
    
    subContent.className = 'unique socialMedia';
}