const express = require('express');

const router = express.Router();
const bcrypt = require('bcrypt');

const renderTemplate = require('../../lib/renderReactModule');
const Auth = require('../views/Auth');
const { User } = require('../../db/models');

router
  .get('/auth', (req, res) => {
    renderTemplate(Auth, null, res);
  })
  // регистрация пользователя
  .post('/auth/register', async (req, res) => {
    const { login, password } = req.body;
    try {
      const find = await User.findOne({ where: { login } });
      if (find) {
        res.send({ user: 'exist' });
      } else {
        const hash = await bcrypt.hash((password), 10);
        const newUser = await User.create({ login, password: hash, user_role: false });
        req.session.newUser = newUser.login;
        req.session.save(() => {
          res.json({ login: 'ok' });
        });
      }
    } catch (error) {
      res.send(`Error ------> ${error}`);
    }
  })
// авторизация пользователя
  .post('/auth/login', async (req, res) => {
    const { login, password } = req.body;
    try {
      const checkUser = await User.findOne({ where: { login } });
      if (!checkUser) {
        res.json({ user: 'unknownUser' });
        return;
      }
      const passCheck = await bcrypt.compare((password), checkUser.password);
      if (passCheck) {
        req.session.newUser = checkUser.login;
        req.session.role = checkUser.user_role;
        req.session.save(() => {
          res.json({ login: 'ok' });
        });
      } else {
        res.json({ user: 'wrong' });
      }
    } catch (error) {
      res.send(`Error ------> ${error}`);
    }
  })
  .get('/auth/logout', async (req, res) => {
    try {
      if (req.session.newUser) {
        req.session.destroy(() => {
          res.clearCookie('userCookie');
          res.redirect('/home');
        });
      } else {
        res.redirect('/auth'); // ?????
      }
    } catch (error) {
      res.send(`Error ------> ${error}`);
    }
  });

module.exports = router;
