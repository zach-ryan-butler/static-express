const express = require('express');
const app = express();

app.use(express.static('./public'));

const colors = [
    { name: 'red', hex: 'FF0000', r: 255, g: 0, b: 0 },
    { name: 'green', hex: '008000', r: 0, g: 128, b: 0 },
    { name: 'blue', hex: '0000FF', r: 0, g: 0, b: 255 }
];

app.get('/api/v1/colors', (req, res) => {
    res.send(colors);
});

app.get('/api/v1/colors/:color', (req, res) => {
    const color = colors.find(color => color === req.params.color || {});
    res.send(color)
});

module.exports = app;