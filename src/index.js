import './style.css';
import {menuBtn, contactHrsBtn, reservationsBtn, location, imgDisplay} from './layout';
import {menuPage} from './menu';
import {contactPage} from './contact';
import {reservationPage} from './reservation';
import {pageLoad} from './initial';

pageLoad();

menuBtn.addEventListener('click', () => {
    contactHrsBtn.style.textDecoration = 'none';
    reservationsBtn.style.textDecoration = 'none';
    menuBtn.style.textDecoration = 'underline var(--logo-gold) 2px';
    imgDisplay.innerHTML = '';
    menuPage();
})

contactHrsBtn.addEventListener('click', () => {
    menuBtn.style.textDecoration = 'none';
    reservationsBtn.style.textDecoration = 'none';
    contactHrsBtn.style.textDecoration = 'underline var(--logo-gold) 2px';
    imgDisplay.innerHTML = '';
    contactPage();
})

reservationsBtn.addEventListener('click', () => {
    menuBtn.style.textDecoration = 'none';
    contactHrsBtn.style.textDecoration = 'none';
    reservationsBtn.style.textDecoration = 'underline var(--logo-gold) 2px';
    imgDisplay.innerHTML = '';
    reservationPage();
})

location.addEventListener('click', () => {
    menuBtn.style.textDecoration = 'none';
    contactHrsBtn.style.textDecoration = 'none';
    reservationsBtn.style.textDecoration = 'none';
    imgDisplay.innerHTML = '';
    pageLoad();
})