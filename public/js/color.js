import { getSpecficColor } from './services/colorsApi.js';

const root = document.getElementById('root');

const colorList = document.createElement('ul');

const search = new URLSearchParams(window.location.search);
const color = search.get('name');

getSpecficColor(color)
    .then(color => {
        const li = document.createElement('li');
        li.textContent = `Name: ${color.name} Hex value: ${color.hex} RGB values: ${color.r}/${color.g}/${color.b}`;
        colorList.appendChild(li);
    });

root.appendChild(colorList);

