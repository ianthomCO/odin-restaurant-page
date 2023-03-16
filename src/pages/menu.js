function loadMenu(){
    console.log("Load Menu Page");

    loadHeader();
}

function loadHeader(){
    const title = document.getElementById('title');
    const moto = document.getElementById('moto');

    title.textContent = "Menu";
    moto.textContent = "What You Want To Eat";
}


export default loadMenu;