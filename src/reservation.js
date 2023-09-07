import {imgDisplay, subContent} from './layout.js';
import { createSocials } from './initial.js';

export function reservationPage() {

    imgDisplay.style.backgroundImage = 'url("../src/images/reservation.avif")';
    imgDisplay.className = 'imgDisplay reservation';
    imgDisplay.innerHTML = '';

    const reservationBox = document.createElement('div');
    reservationBox.innerHTML = `
        <p>NOBU SYDNEY</p>
        <p>1 Barangaroo Avenue <br>Sydney, NSW, 2000</p> 
        <p><a href="https://www.google.com/maps/place/Nobu/@-33.8620863,151.1984863,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12af26a6630179:0x64b452fc17703e92!8m2!3d-33.8620908!4d151.2010612!16s%2Fg%2F11lglvc46d?entry=ttu">Directions</a></p>
        <div>Email: <a href="mailto: F&amp;B-SYD-Nobu@crownresorts.com.au">F&amp;B-SYD-Nobu@crownresorts.com.au</a></div>
        <div>Phone: <a href="tel:02 8871 7188">02 8871 7188</a></div>

        <button><a href="https://www.sevenrooms.com/reservations/nobucrownsydney">ONLINE RESERVATION </a></button>
    `;

    subContent.innerHTML = '';
    subContent.className = 'unique socialMedia';
    createSocials();

    imgDisplay.appendChild(reservationBox);
    
}

/* <p>NOBU SYDNEY</p>
    <p>1 Barangaroo Avenue <br>Sydney, NSW, 2000</p>
    <p>Directions</p>
    <div>Email <a href="mailto: F&amp;B-SYD-Nobu@crownresorts.com.au">F&amp;B-SYD-Nobu@crownresorts.com.au</a></div>
    <div>Phone <a href="tel:02 8871 7188">02 8871 7188</a></div>

    <button>ONLINE RESERVATION</button>
*/