import loadHome from './home';

function initializeWebsite(){
    createNav();
    createHeader();
    createMain();
    createFooter();
    loadHome();
}

function createNav(){
    const content = document.getElementById('content');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const navBarList = ["Home","Menu","Contact"];

    nav.classList.add("navbar");

    nav.appendChild(ul);

    navBarList.forEach(renderProductList)

    function renderProductList(element, index, arr) {
        const li = document.createElement('li');
        li.classList.add("page-link")

        li.id = navBarList[index].toLowerCase();
        
        ul.appendChild(li);

        li.textContent = element;
    }

    content.prepend(nav);
}

function createHeader(){
    const content = document.getElementById('content');
    const header = document.createElement('header');
    const banner = document.createElement('div');
    const bannerHeader = document.createElement('div');
    const bannerImgContainer = document.createElement('div');
    const bannerImg = document.createElement('img');
    const bannerHeading = document.createElement('div');
    const title = document.createElement('div');
    const moto = document.createElement('div');

    banner.classList.add("banner");
    bannerHeader.classList.add("banner-header");
    bannerImgContainer.classList.add("banner-img");
    bannerHeading.classList.add("banner-heading");
    title.id = "title";
    moto.id = "moto";

    bannerImg.src = "./img/brunch.jpeg";
    bannerImg.alt = "Brunch Meal";

    bannerImgContainer.appendChild(bannerImg);
    bannerHeader.appendChild(bannerImgContainer);

    bannerHeading.appendChild(title);
    bannerHeading.appendChild(moto);
    bannerHeader.appendChild(bannerHeading);

    banner.appendChild(bannerHeader);

    header.appendChild(banner);

    content.append(header);
}

function createMain(){
    const content = document.getElementById('content');
    const main = document.createElement('main');

    content.append(main);
}

function createFooter(){
    const content = document.getElementById('content');
    const footer = document.createElement('footer');
    const citation = document.createElement('p');
    const a = document.createElement('a');
    const i = document.createElement('i');

    citation.textContent = "Copyright © 2023 Ian Thom "

    i.classList.add('fa','fa-github');
    i.style = "font-size:20px";
    a.appendChild(i);
    a.href = "https://github.com/ianthomCO";

    footer.appendChild(citation);
    footer.appendChild(a);

    content.append(footer);
}

export default initializeWebsite;