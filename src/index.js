import './style.css';
import homePageRender from './modules/home.js';

import homeTab from './modules/homeTab';
import menuTab from './modules/menuTab';
import aboutUsTab from './modules/aboutUsTab';

const content = document.getElementById('content');

const RenderPage = () => {
    //Header, Footer, Main are included in homePageRender
    // homePageRender();

    // // //Then in Main we append Tabs
    // const main = document.getElementById('main');
    // main.appendChild(homeTab());
    // main.appendChild(menuTab());
    // main.appendChild(aboutUsTab());
}

export { content as default};

window.addEventListener('load', RenderPage);