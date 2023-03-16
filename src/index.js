import './style/style.scss';

import initializeWebsite from './pages/initialize';
import loadHome from './pages/home';
import loadMenu from './pages/menu';
import loadContact from './pages/contact';

initializeWebsite();
addNavEvents();

function addNavEvents(){
    const home = document.getElementById('home');
    const menu = document.getElementById('menu');
    const contact = document.getElementById('contact');

    home.addEventListener('click',loadHome);
    menu.addEventListener('click',loadMenu);
    contact.addEventListener('click',loadContact);
}