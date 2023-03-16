function loadContact(){
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

    const contactContainer = document.createElement('div');
    const street = document.createElement('div');
    const city = document.createElement('div');
    const phone = document.createElement('div');
    const email = document.createElement('div');

    contactContainer.id = "contact-info";

    street.classList.add('contact-street');
    city.classList.add('contact-city');
    phone.classList.add('contact-phone');
    email.classList.add('contact-email');

    street.textContent = "1600 Pennsylvania Ave,";
    city.textContent = "Washington DC";
    phone.textContent = "123-555-6789";
    email.textContent = "customerservice@brunchfast.org";

    contactContainer.appendChild(street);
    contactContainer.appendChild(city);
    contactContainer.appendChild(phone);
    contactContainer.appendChild(email);

    return contactContainer
}

function loadMain(){
    const main = document.querySelector('main');
    
    main.textContent = "";
    main.appendChild(createMain());  
}

export default loadContact;