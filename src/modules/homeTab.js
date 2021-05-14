export default function homeTab() {
    const home = document.createElement('div');
    home.setAttribute('id', 'home');

    const homeTitle = document.createElement('h1');
    homeTitle.classList.add('title');
    homeTitle.innerHTML = `Spicy jalapeno meatball flank <span>chuck jerky</span>.`;
    home.appendChild(homeTitle);

    const subtitle = document.createElement('p');
    subtitle.innerHTML = 'Ground round pork belly flank pork chop boudin chislic meatloaf ribeye drumstick swine cow brisket bacon hamburger pig. Kielbasa rump flank buffalo pig alcatra pork loin shoulder short loin jerky turkey beef ribs cupim.';
    home.appendChild(subtitle);

    const orderButton = document.createElement('button');
    orderButton.textContent = 'Order Now';
    home.appendChild(orderButton);

    //Advertisment Div
    const advDiv = document.createElement('div');
    advDiv.classList.add('contact-adv');
    advDiv.innerHTML = `
        <p>
            <i class="fas fa-clock"></i>
            <span>9483 Ashley Lane <br>Bolingbrook, IL 60440</span>
        </p>
        <p>
            <span>Mon-Fri: 11am - 23pm<br> Sat-Sun: 11am - 17pm</span>
            <i class="fas fa-map-marker-alt"></i>
        </p>`;
    home.appendChild(advDiv);
    
    return home;
}