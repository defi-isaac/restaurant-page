import {imgDisplay, subContent} from './layout.js';

export function menuPage() {
    
    imgDisplay.style.backgroundImage = 'url("../src/images/food.avif")';
    imgDisplay.className = 'imgDisplay food'

    // subContent.innerHTML = '';
    subContent.className = 'unique menu';

    const entree = document.createElement('div');
    entree.classList.add('entree');
    const entreeTitle = document.createElement('h1');
    entreeTitle.textContent = 'ENTREE';
    const entreeLi = document.createElement('ul');
    entreeLi.insertAdjacentHTML("beforeend", `
        <li><span>Nobu Wagyu Sliders (2pcs)</span> <span>30</span></li>
        <li><span>Black Cod Butter Lettuce (4pcs)</span> <span>32</span></li>
        <li><span>Spicy Miso Chips with Tuna or Scallop</span> <span>18</span></li>
    `);

    const main = document.createElement('div');
    main.classList.add('main');
    const mainTitle = document.createElement('h1');
    mainTitle.textContent = 'MAIN';
    const mainLi = document.createElement('ul');
    mainLi.insertAdjacentHTML("beforeend", `
        <li><span>Seafood Ceviche</span> <span>24</span></li>
        <li><span>Lobster Wasabi Pepper</span> <span>98</span></li>
        <li><span>Black Cod Miso</span> <span>65</span></li>
    `);

    const dessert = document.createElement('div');
    dessert.classList.add('dessert');
    const dessertTitle = document.createElement('h1');
    dessertTitle.textContent = 'DESSERT';
    const dessertLi = document.createElement('ul');
    dessertLi.insertAdjacentHTML("beforeend", `
        <li><span>Chocolate Bento Box</span> <span>21</span></li>
        <li><span>Nobu Cheesecake</span> <span>21</span></li>
        <li><span>Banana Harumaki</span> <span>17</span></li>
    `);

    subContent.append(entree, main, dessert);
    entree.append(entreeTitle, entreeLi);
    main.append(mainTitle, mainLi);
    dessert.append(dessertTitle, dessertLi);
}