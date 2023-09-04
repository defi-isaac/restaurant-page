export function pageLoad() {
    const container = document.getElementById('container');
    const header = document.createElement('header');
    const logo = document.createElement('div');
    logo.classList.add('logo');
    const location = document.createElement('div');
    location.classList.add('location')
    const navList = document.createElement('ul');
    const menu = document.createElement('li');
    const contactHrs = document.createElement('li');
    const reservations = document.createElement('li');
    const directions = document.createElement('a');
    directions.classList.add('directions');
    directions.href = 'https://www.google.com/maps/place/Nobu/@-33.8620863,151.1984863,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12af26a6630179:0x64b452fc17703e92!8m2!3d-33.8620908!4d151.2010612!16s%2Fg%2F11lglvc46d?entry=ttu';
    directions.target = '_blank';
    const content = document.createElement('div');
    content.classList.add('content');
    const imgDisplay = document.createElement('div');
    imgDisplay.classList.add('imgDisplay', 'restaurant');
    const socialMedia = document.createElement('div');
    socialMedia.classList.add('socialMedia', 'unique');
    const ig = document.createElement('img');
    const fb = document.createElement('img');
    const twitter = document.createElement('img');
    const igContainer = document.createElement('a');
    const fbContainer = document.createElement('a');
    const xContainer = document.createElement('a');
    const footer = document.createElement('footer');

    logo.textContent = 'NOBU';
    location.textContent = "SYDNEY";
    directions.textContent = "DIRECTIONS";
    menu.textContent = 'MENU';
    contactHrs.textContent = 'CONTACT & HOURS';
    reservations.textContent = 'RESERVATIONS';

    function changeBg() {
        const restaurantImg = ['url("../src/images/restaurant1.jpg")', 'url("../src/images/restaurant2.jpg")'];
        if (imgDisplay.style.backgroundImage == 'url("../src/images/restaurant1.jpg")') {
            imgDisplay.style.backgroundImage = 'url("../src/images/restaurant2.jpg")'
        } else {
            imgDisplay.style.backgroundImage = 'url("../src/images/restaurant1.jpg")';
        }
    }

    setInterval(changeBg, 7000);
    
    ig.src = '../src/images/instagram.svg';
    igContainer.href = 'https://www.instagram.com/nobuaustralia/';
    igContainer.target = '_blank';
    fb.src = '../src/images/facebook.svg';
    fbContainer.href = 'https://facebook.com/';
    fbContainer.target = '_blank';
    twitter.src = '../src/images/logo-x.svg';
    xContainer.href = 'https://twitter.com/Defi_Isaac';
    xContainer.target = '_blank';

    footer.textContent = '© Defi Isaac Github. Inspired by Nobu Sydney PASTPRESENTFUTURE'

    container.appendChild(header);
    container.appendChild(content);
    container.appendChild(footer);
    header.appendChild(logo);
    logo.appendChild(location);
    header.appendChild(navList);
    navList.appendChild(menu);
    navList.appendChild(contactHrs);
    navList.appendChild(reservations);
    header.appendChild(directions);
    content.appendChild(imgDisplay);
    content.appendChild(socialMedia);
    socialMedia.appendChild(igContainer);
    socialMedia.appendChild(fbContainer);
    socialMedia.appendChild(xContainer);
    igContainer.appendChild(ig);
    fbContainer.appendChild(fb);
    xContainer.appendChild(twitter);

}