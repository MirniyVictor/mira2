import express from 'express';
import path from 'path';
import colors from 'colors';
import serverRoutes from './routes/servers.js';
import os from 'node:os';
import reply from 'alice-renderer';

import myJson from './main_conf.json' assert {type: 'json'};


const app = express();
const PORT = 3000;
const STATIC_DIR = 'static';
const __dirname = path.resolve();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'templates'));
app.use(serverRoutes);

/* express static & dinamic pages */

app.use(express.static(path.join(__dirname, STATIC_DIR)));

app.get('/', (req, res) => {
    res.render('index', {
        title: myJson.main_page.title,
        name_page: myJson.main_page.name_page,
        description: myJson.main_page.description,
        page_id: myJson.main_page.id
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'M.I.R.A - sip service (about page)',
        name_page: 'Страница о нас',
        description: 'Описание страницы о нас',
        page_id: 'about'
    });
});

app.get('/sysinfo', (req, res) => {
    res.render('sysinfo', {
        title: 'M.I.R.A - sip service (sysinfo page)',
        name_page: 'Информация о системе',
        description: 'Описание информации',
        page_id: 'sysinfo',
        os_info: os.version()
    });
});

/* express static & dinamic pages */

// app.get('/', (req, res) => {
//     res.sendFile(`${__dirname}/${STATIC_DIR}/index.html`);
// });

app.listen(PORT, () => {
    console.log(`Сервер`.inverse.green + ` M.I.R.A `.brightGreen + `запущен на порту -> ${PORT}...`.inverse.green);
    console.log('Файл описания -> main_config.json -> '.inverse.yellow + myJson.name.inverse.yellow);
    console.log('Путь к шаблонам -> '.inverse.yellow + app.get('views').inverse.yellow);
    console.log('Архитектура: -> '.inverse.yellow + os.version().inverse.yellow);
});