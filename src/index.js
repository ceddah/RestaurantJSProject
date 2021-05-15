import './style.css';
import homePageRender from './modules/home.js';

import homeTab from './modules/homeTab';
import menuTab from './modules/menuTab';
import aboutUsTab from './modules/aboutUsTab';
import contactTab from './modules/contactTab';

const content = document.getElementById('content');

const RenderPage = () => {
    //Header, Footer, Main are included in homePageRender
    homePageRender();

    // // //Then in Main we append Tabs
    const main = document.getElementById('main');
    main.appendChild(homeTab());
    main.appendChild(menuTab());
    main.appendChild(aboutUsTab());
    main.appendChild(contactTab());
    
    const tabButtons = document.querySelectorAll('.tabButton');
    tabButtons.forEach(button => button.addEventListener('click', (e) => {
        switchTabs(e);
    }));
}

const switchTabs = (event) => {
    const id = event.target.dataset.id;
    
    const main = document.getElementById('main');
    const tabs = main.childNodes;
    tabs.forEach(tab => tab.classList.remove('active'));

    const element = document.getElementById(id);
    element.classList.add('active');
}

export { content as default};

window.addEventListener('load', RenderPage);