function loadMenu(){
    console.log("Load Menu Page");

    loadHeader();
    loadMain();
}

function loadHeader(){
    const title = document.getElementById('title');
    const moto = document.getElementById('moto');

    title.textContent = "Menu";
    moto.textContent = "What You Want To Eat";
}

function createMain(){
    const menuList = [
        {item:"Eggs Benedict",price:12,description:"Canadian bacon stacked on an english muffin with two eggs and hollandaise"},
        {item:"Avocado Benedict",price:12,description:"Avocado, tomatoe, and arugula stacked on an english muffin with two eggs and hollandaise"},
        {item:"French Toast",price:10,description:"Thick sliced sourdough bread dipped in custard batter"},
        {item:"Biscuits & Gravy",price:11,description:"Creamy sausage gravy on top of homemade buttermilk biscuits"}
    ];

    const menu = document.createElement('div');

    menuList.forEach(renderMenuItem,menu);

    return menu;
}

function renderMenuItem(element, index, arr){
    const menuItem = document.createElement('div');
    const itemName = document.createElement('div');
    const itemDescription = document.createElement('div');
    const itemPrice = document.createElement('div');

    menuItem.classList.add("menu-item");
    itemName.classList.add("item-name");
    itemDescription.classList.add("item-desc");
    itemPrice.classList.add("item-price");

    itemName.textContent = element.item;
    itemDescription.textContent = element.description;
    itemPrice.textContent = element.price;

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDescription);
    menuItem.appendChild(itemPrice);

    this.appendChild(menuItem);
}

function loadMain(){
    const main = document.querySelector('main');
    
    main.textContent = "";
    main.appendChild(createMain());  
}

export default loadMenu;