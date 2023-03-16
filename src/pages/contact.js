function loadContact(){
    console.log("Load Contact Page");

    loadHeader();
}

function loadHeader(){
    const title = document.getElementById('title');
    const moto = document.getElementById('moto');

    title.textContent = "Contact Us";
    moto.textContent = "How To Get In Touch";
}

export default loadContact;