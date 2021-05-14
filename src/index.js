import './style.css';
import homeRender from './modules/home.js';

const content = document.getElementById('content');

const RenderPage = () => {
    console.log('rendering page...333')
    homeRender();
}

window.addEventListener('load', RenderPage);