import {imgDisplay, subContent} from './layout.js';
import { createSocials } from './initial.js';

export function reservationPage() {

    imgDisplay.style.backgroundImage = 'url("../src/images/reservation.avif")';
    imgDisplay.className = 'imgDisplay reservation';
    imgDisplay.innerHTML = '';

    const reservationBox = document.createElement('div');
    const name = document.createElement('p');
    const location = document.createElement('p');
    const directions = document.createElement('p');
    const directionRef = document.createElement('a');
    const email = document.createElement('div');
    const emailRef = document.createElement('a');
    const phone = document.createElement('div');
    const phoneRef = document.createElement('a');
    const reserveBtn = document.createElement('button');
    const reserveRef = document.createElement('a');
    
    name.textContent = 'NOBU SYDNEY';
    location.innerHTML = `1 Barangaroo Avenue <br>Sydney, NSW, 2000`;
    directionRef.textContent = 'Directions';
    directionRef.href = 'https://www.google.com/maps/place/Nobu/@-33.8620863,151.1984863,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12af26a6630179:0x64b452fc17703e92!8m2!3d-33.8620908!4d151.2010612!16s%2Fg%2F11lglvc46d?entry=ttu';
    directionRef.target = '_blank';
    email.textContent = 'Email: ';
    emailRef.href = 'mailto: F&amp;B-SYD-Nobu@crownresorts.com.au'
    emailRef.textContent = 'F&B-SYD-Nobu@crownresorts.com.au';
    phone.textContent = 'Phone: ';
    phoneRef.href = 'tel:02 8871 7188';
    phoneRef.textContent = '02 8871 7188';
    reserveRef.textContent = 'ONLINE RESERVATION'
    reserveRef.href="https://www.sevenrooms.com/reservations/nobucrownsydney"
    reserveRef.target = '_blank';
    


    subContent.innerHTML = '';
    subContent.className = 'unique socialMedia';
    createSocials();

    imgDisplay.appendChild(reservationBox);
    reservationBox.append(name, location, directions, email, phone, reserveBtn);
    directions.append(directionRef);
    email.append(emailRef);
    phone.append(phoneRef);
    reserveBtn.append(reserveRef);
    
}