import './style.css';
import homeRender from './modules/home.js';

const content = document.getElementById('content');

const RenderPage = () => {
    console.log('rendering page...')
    homeRender();
}

window.addEventListener('load', RenderPage);

export { content as default}