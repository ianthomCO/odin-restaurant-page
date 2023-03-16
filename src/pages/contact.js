function loadContact(){
    console.log("Load Contact Page");

    loadHeader();
    loadMain();
}

function loadHeader(){
    const title = document.getElementById('title');
    const moto = document.getElementById('moto');

    title.textContent = "Contact Us";
    moto.textContent = "How To Get In Touch";
}

function loadMain(){
    const menuList = [
        {item:"Eggs Benedict",price:12,description:"Canadian bacon stacked on an english muffin with two eggs and hollandaise"},
        {item:"Avocado Benedict",price:12,description:"Avocado, tomatoe, and arugula stacked on an english muffin with two eggs and hollandaise"},
        {item:"French Toast",price:10,description:"Thick sliced sourdough bread dipped in custard batter"},
        {item:"Biscuits & Gravy",price:11,description:"Creamy sausage gravy on top of homemade buttermilk biscuits"}
    ]

    const main = document.querySelector('main');
    main



}

function createMenuItem(item){

}

export default loadContact;