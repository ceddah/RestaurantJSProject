import content from '../index.js';

export default function homePageRender() {
    console.log('home.js')
    //On-load Page
    content.appendChild(headerRender());
    content.appendChild(mainSection());
    content.appendChild(footerRender());
}

const headerRender = () => {
    const header = document.createElement('header');
    header.setAttribute('id', 'header');

    const nav = document.createElement('nav');
    nav.setAttribute('id', 'nav');

    const logoDiv = document.createElement('div');
    logoDiv.classList.add('logo');
    const logoTitle = document.createElement('h2');
    logoTitle.innerHTML = 'Food Place';
    logoDiv.appendChild(logoTitle);
    nav.appendChild(logoDiv);

    nav.appendChild(navigationLinks());
    header.appendChild(nav);

    return header;
}


const footerRender = () => {
    const footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');

    const socialDiv = document.createElement('div');
    socialDiv.classList.add('social');
    const textSpan = document.createElement('span');
    textSpan.innerHTML = 'You can find us on:';
    socialDiv.appendChild(textSpan);

    const icons = ['fa-instagram', 'fa-twitter', 'fa-tiktok', 'fa-pinterest'];
    for(let i = 0; i < icons.length; i++) {
        const icon = document.createElement('i');
        icon.classList.add('fab');
        icon.classList.add(`${icons[i]}`);
        socialDiv.appendChild(icon);
    };
    footer.appendChild(socialDiv);
    
    const copyrightMsg = document.createElement('p');
    copyrightMsg.classList.add('madeBy');
    copyrightMsg.innerHTML = 'Made by ceddah 2021';
    footer.appendChild(copyrightMsg);

    const footerNav = document.createElement('div');
    footerNav.classList.add('footer-nav');
    footerNav.appendChild(navigationLinks());
    footer.appendChild(footerNav);

    return footer;
}

const mainSection = () => {
    const main = document.createElement('main');
    main.setAttribute('id', 'main');

    return main;
}

const navigationLinks = () => {
    const ulList = document.createElement('ul');
    const navContent = ['Home', 'Menu', 'About Us', 'Contact'];
    for(let i = 0; i < navContent.length; i++) {
        const li = document.createElement('li');
        const aLink = document.createElement('a');
        aLink.innerHTML = `${navContent[i]}`;
        li.appendChild(aLink);
        ulList.appendChild(li);
    }

    return ulList;
}