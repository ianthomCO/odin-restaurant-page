function loadContact(){
    console.log("Load Contact Page");

    loadHeader();
    loadMain();
}

function loadHeader(){
    const title = document.getElementById('title');
    const moto = document.getElementById('moto');

    title.textContent = "Contact Us";
    moto.textContent = "Get In Touch With Us";
}

function createMain(){

    return
}

function loadMain(){
    const main = document.querySelector('main');
    
    main.textContent = "";
    main.appendChild(createMain());  
}



export default loadContact;