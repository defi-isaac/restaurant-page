import './style.css';
import {menu, contactHrs, reservations} from './layout';
import {menuPage} from './menu';
import {pageLoad} from './initial';

pageLoad();

menu.addEventListener('click', () => {
    contactHrs.style.textDecoration = 'none';
    reservations.style.textDecoration = 'none';
    menu.style.textDecoration = 'underline var(--logo-gold) 2px';
    menuPage();
})

contactHrs.addEventListener('click', () => {
    menu.style.textDecoration = 'none';
    reservations.style.textDecoration = 'none';
    contactHrs.style.textDecoration = 'underline var(--logo-gold) 2px';
    menuPage();
})

reservations.addEventListener('click', () => {
    menu.style.textDecoration = 'none';
    contactHrs.style.textDecoration = 'none';
    reservations.style.textDecoration = 'underline var(--logo-gold) 2px';
    menuPage();
})
