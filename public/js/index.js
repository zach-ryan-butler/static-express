import { getColors } from './services/colorsApi.js';

const root = document.getElementById('root');

const colorsList = document.createElement('ul');

getColors()
    .then(colors => {
        colors.forEach(color => {
            const li = document.createElement('li');
            li.textContent = `${color.name}`;

            colorsList.appendChild(li);
        });
    });

root.appendChild(colorsList);