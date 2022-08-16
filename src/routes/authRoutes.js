const express = require('express');

const router = express.Router();
const bcrypt = require('bcrypt');

const renderTemplate = require('../../lib/renderReactModule');
const Auth = require('../views/Auth');

router
  .get('/auth', (req, res) => {
    renderTemplate(Auth, null, res);
  });

module.exports = router;
