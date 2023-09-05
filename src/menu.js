import {imgDisplay, subContent} from './layout.js';

export function menuPage() {
    
    imgDisplay.style.backgroundImage = 'url("../src/images/food.avif")';
    imgDisplay.classList.replace('restaurant', 'food');

    subContent.innerHTML = '';
    subContent.className = 'unique menu';

    const entreeList = document.createElement('div');
    entreeList.classList.add('entree');
    const entreeTitle = document.createElement('h1');
    entreeTitle.textContent = 'ENTREE';
    const mainList = document.createElement('div');
    mainList.classList.add('main');
    const mainTitle = document.createElement('h1');
    mainTitle.textContent = 'MAIN';
    const dessertList = document.createElement('div');
    dessertList.classList.add('dessert');
    const dessertTitle = document.createElement('h1');
    dessertTitle.textContent = 'DESSERT';

    subContent.append(entreeList, mainList, dessertList);
    entreeList.append(entreeTitle);
    mainList.append(mainTitle);
    dessertList.append(dessertTitle);
}