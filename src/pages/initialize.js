function initializeWebsite(){
    createNav();
    createHeader();
    createMain();
    createFooter();
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

    title.textContent = "Brunchfast";
    moto.textContent = "Brunchfast";

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
    const pageBanner = document.createElement('div');

    const quotes = [
        {quote:'"Best brunch in town!"',author:'- The Denver Post'},
        {quote:'"Friendliest staff!"',author:'- Ian Thom'},
        {quote:'"Egg-sellent food!"',author:'- Guy Fieri'}
    ];

    const images = [
        {url:"./img/brunch-2.jpeg",alt:"Brunch Food"},
        {url:"./img/brunch-eating.jpeg",alt:"Brunch Foot"},
        {url:"./img/brunch-diner.jpeg",alt:"Diner"}
    ];

    pageBanner.classList.add("page-banner");

    for (let i = 0; i < 3; i++) {
        const pageCell = document.createElement('div');
        const quote = document.createElement('div');
        const author = document.createElement('div');
        const image = document.createElement('img');

        pageCell.classList.add("page-cell");
        quote.classList.add("quote");
        author.classList.add("author");

        quote.textContent = quotes[i].quote;
        author.textContent = quotes[i].author;
        
        pageCell.appendChild(quote);
        pageCell.appendChild(author);

        image.src = images[i].url;
        image.alt = images[i].alt;

        pageBanner.appendChild(pageCell);
        pageBanner.appendChild(image);
    }

    main.appendChild(pageBanner);    

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