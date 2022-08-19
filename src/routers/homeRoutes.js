const express = require('express');
const renderTemplate = require('../../lib/renderReactModule');
const Home = require('../views/Home');
const { Tea } = require('../../db/models');

const router = express.Router();

router.get('/home', async (req, res) => {
  const { newUser } = req.session;
  const teas = await Tea.findAll({ raw: true });
  renderTemplate(Home, { newUser, teas }, res);
});

router.post('/home/tea', async (req, res) => {
  try {
    const teas = await Tea.findAll({ raw: true });
    res.json(teas);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
