import './style.css';
import homePageRender from './modules/home.js';

import homeTab from './modules/homeTab';
import menuTab from './modules/menuTab';

const content = document.getElementById('content');

const RenderPage = () => {
    //Header, Footer, Main are included in homePageRender
    // homePageRender();

    // // //Then in Main we append Tabs
    // const main = document.getElementById('main');
    // main.appendChild(homeTab());
    // main.appendChild(menuTab());
}

export { content as default};

window.addEventListener('load', RenderPage);