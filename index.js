import express from 'express';
import path from 'path';
import colors from 'colors';
const app = express();
import serverRoutes from './routes/servers.js';

const PORT = process.env.PORT ?? 3000;
const STATIC_DIR = 'static';
const __dirname = path.resolve();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'templates'));
console.log('путь к шаблонам -> '.inverse.yellow + app.get('views').inverse.yellow);
app.use(serverRoutes);

/* express static & dinamic pages */

app.use(express.static(path.join(__dirname, STATIC_DIR)));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'M.I.R.A - sip service (main page)',
        name_page: 'Главная страница',
        description: 'Описание страницы',
        active: 'main'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'M.I.R.A - sip service (about page)',
        name_page: 'Страница о нас',
        description: 'Описание страницы о нас',
        active: 'about'
    });
});

/* express static & dinamic pages */

// app.get('/', (req, res) => {
//     res.sendFile(`${__dirname}/${STATIC_DIR}/index.html`);
// });

app.listen(PORT, () => {
    console.log(`Сервер`.inverse.green + ` M.I.R.A `.brightGreen + `запущен на порту -> ${PORT}...`.inverse.green);
});