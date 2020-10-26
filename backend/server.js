const express = require('express');
const menuItems = require('./data/menuItems');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello, World");
});

app.get('/api/v1/menu', (req, res) => {
    res.json(menuItems);
});

app.get('/api/v1/menu/:id', (req, res) => {
    const item = menuItems.find(i => i._id == req.params.id);
    res.json(item);
});

app.listen(5000, () => {
    console.log(`Server running on port 5000`);
});