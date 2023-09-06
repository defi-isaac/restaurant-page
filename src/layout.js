const container = document.getElementById('container');
const header = document.createElement('header');
const logo = document.createElement('div');
logo.classList.add('logo');
export const location = document.createElement('div');
location.classList.add('location')
const navList = document.createElement('ul');
export const menuBtn = document.createElement('li');
menuBtn.classList.add('menu');
export const contactHrsBtn = document.createElement('li');
contactHrsBtn.classList.add('contact');
export const reservationsBtn = document.createElement('li');
reservationsBtn.classList.add('reservations');
const directions = document.createElement('a');
directions.classList.add('directions');
directions.href = 'https://www.google.com/maps/place/Nobu/@-33.8620863,151.1984863,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12af26a6630179:0x64b452fc17703e92!8m2!3d-33.8620908!4d151.2010612!16s%2Fg%2F11lglvc46d?entry=ttu';
directions.target = '_blank';
const content = document.createElement('div');
content.classList.add('content');
export const imgDisplay = document.createElement('div');
imgDisplay.classList.add('imgDisplay');
export const subContent = document.createElement('div');
subContent.classList.add('unique');
const footer = document.createElement('footer');

logo.textContent = 'NOBU';
location.textContent = "SYDNEY";
directions.textContent = "DIRECTIONS";
menuBtn.textContent = 'MENU';
contactHrsBtn.textContent = 'CONTACT & HOURS';
reservationsBtn.textContent = 'RESERVATIONS';
footer.textContent = '© Defi Isaac Github. Inspired by Nobu Sydney PASTPRESENTFUTURE'


container.append(header, content, footer)
header.append(logo, navList, directions)
logo.appendChild(location);
navList.append(menuBtn, contactHrsBtn, reservationsBtn);
content.append(imgDisplay, subContent);
