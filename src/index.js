import './style.css';
import homeRender from './modules/home.js';

const content = document.getElementById('content');

const RenderPage = () => {
    console.log('rendering page..')
    homeRender();
}

export { content as default};

window.addEventListener('load', RenderPage);