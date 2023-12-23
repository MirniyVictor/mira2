const express = require('express');
const app = express();
const path = require('path');
const colors = require('colors');


const PORT = process.env.PORT ?? 3000;
const STATIC_DIR = 'static';

app.use(express.static(path.join(__dirname, STATIC_DIR)));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/${STATIC_DIR}/index.html`);
});

app.listen(PORT, () => {
    console.log(`Server MIRA has been started on port ${PORT}...!`.inverse.green);
});