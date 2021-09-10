import './styles.css';
import {
  getData, sendData,
} from './script.js';

document.getElementById('submit').addEventListener('click', () => sendData());

document.getElementById('refresh-button').addEventListener('click', () => getData());

window.addEventListener('load', () => getData());