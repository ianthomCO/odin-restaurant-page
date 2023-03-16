function loadHome(){

    loadMain();
    loadHeader();

    
    console.log("Load Home Page");
}

function loadHeader(){
    const title = document.getElementById('title');
    const moto = document.getElementById('moto');

    title.textContent = "Brunchfast";
    moto.textContent = "Where You Want To Eat";
}

function loadMain(){
    const main = document.querySelector('main');
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

}

export default loadHome;