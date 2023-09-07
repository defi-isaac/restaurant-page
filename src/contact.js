import {imgDisplay, subContent} from './layout.js';
import { createSocials } from './initial.js';

export function contactPage() {
    imgDisplay.style.backgroundImage = 'url("../src/images/contact.jpeg")';
    imgDisplay.className = 'imgDisplay contact';
    imgDisplay.innerHTML = ``;

    const contact = document.createElement('div');
    const contactTxt = document.createElement('p');
    contactTxt.textContent = 'CONTACT US';
    const email = document.createElement('div');
    const emailRef = document.createElement('a');
    const phone = document.createElement('div');
    const phoneRef = document.createElement('a');
    const hours = document.createElement('div');
    const hoursTxt = document.createElement('p');
    hoursTxt.textContent = 'HOURS';
    const timeTable = document.createElement('table');
    timeTable.innerHTML = `
        <tbody>
            <tr>
                <th>Lunch</th>
                <td>Mon-Sun</td>
                <td>12:00-15:00</td>
            </tr>
            <tr>
                <th>Dinner</th>
                <td>Mon-Thu &amp; Sun</td>
                <td>17:30-21:30</td>
            </tr>
            <tr>
                <td></td>
                <td>Fri &amp; Sat</td>
                <td>17:30-22:30</td>
            </tr>
        </tbody>
    `;

    email.textContent = 'Email: ';
    emailRef.href = 'mailto: F&amp;B-SYD-Nobu@crownresorts.com.au'
    emailRef.textContent = 'F&B-SYD-Nobu@crownresorts.com.au';
    phone.textContent = 'Phone: ';
    phoneRef.href = 'tel:02 8871 7188';
    phoneRef.textContent = '02 8871 7188';

    subContent.innerHTML = '';
    subContent.className = 'unique socialMedia';
    createSocials();

    imgDisplay.append(contact, hours);
    contact.append(contactTxt, email, phone);
    hours.append(hoursTxt, timeTable);
    email.append(emailRef);
    phone.append(phoneRef);

}
