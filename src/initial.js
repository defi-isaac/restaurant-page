export function pageLoad() {
    const container = document.getElementById('container');
    const header = document.createElement('header');
    const logo = document.createElement('div');
    logo.classList.add('logo');
    const navList = document.createElement('ul');
    const directions = document.createElement('div');
    directions.classList.add('directions');
    const content = document.createElement('div');
    content.classList.add('content');
    const imgDisplay = document.createElement('div');
    imgDisplay.classList.add('imgDisplay');
    const socialMedia = document.createElement('div')
    socialMedia.classList.add('socialMedia', 'unique');
    const footer = document.createElement('footer')

    container.appendChild(header);
    container.appendChild(content);
    container.appendChild(footer);
    header.appendChild(logo);
    header.appendChild(navList);
    header.appendChild(directions);
    content.appendChild(imgDisplay);
    content.appendChild(socialMedia);
}