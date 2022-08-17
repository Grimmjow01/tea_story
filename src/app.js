require('dotenv').config();

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const { sequelize } = require('../db/models');

// const renderTemplate = require('../../lib/renderReactModule');

const authRouter = require('./routers/authRoutes')
const renderTemplate = require('../lib/renderReactModule');
const indexRoutes = require('./routers/indexRoutes');
const homeRoutes = require('./routers/homeRoutes');
const profileRoute = require('./routers/profileRoute');


const app = express();

app.use(morgan('dev'));
// Чтобы наши статические файлы были видны браузеру, мы должны их подключить
app.use(express.static(path.join(__dirname, '../public/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const infoRouter = require('./routers/info');

// Выносим порт в .env и на всякий случай подставляем дефолтный через ||
const { PORT, SESSION_SECRET } = process.env;

const sessionConfig = {
  name: 'userCookie', // * Название куки
  store: new FileStore(), // * подключение стора (БД для куки) для хранения
  secret: SESSION_SECRET ?? 'your key', // * ключ для шифрования куки
  resave: false, // * если true, пересохраняет сессию, даже если она не поменялась
  saveUninitialized: false, // * Если false, куки появляются только при установке req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10, // * время жизни в ms (10 дней)
    httpOnly: true, // * куки только по http
  },
};
// сначала ссесии, потом руты
app.use(session(sessionConfig));
app.use('/tea', infoRouter);

// мидлварки для роутов
app.use('/', authRouter);
app.use('/', indexRoutes);
app.use('/', homeRoutes);
app.use('/', profileRoute)

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Соединение с базой установлено!');
  } catch (err) {
    console.log(err, 'Error!');
  }
  console.log(`Сервер поднят на ${PORT} порту!`);
});
