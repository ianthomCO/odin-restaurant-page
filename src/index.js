import './style/style.scss';

import loadAbout from './pages/about';
import loadContact from './pages/contact';
import loadHome from './pages/home';
import loadMenu from './pages/menu';

createNav();

function createNav(){
    const content = document.getElementById('content');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const navBarList = ["Home","Menu","About Us","Contact"];

    nav.classList.add("navbar");

    nav.appendChild(ul);

    navBarList.forEach(renderProductList)

    function renderProductList(element, index, arr) {
        const li = document.createElement('li');
        li.classList.add("page-link")
        
        if (index===0) {
            li.classList.add("active")
        }

        ul.appendChild(li);

        li.textContent = element;
    }

    content.prepend(nav);
}