const express = require('express');

const route = express.Router();

const InfoTea = require('../views/InfoTea');
const { Tea, Comment, User } = require('../../db/models');
const render = require('../../lib/renderReactModule');

route.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { newUser, role } = req.session;
    let login = newUser;
    if (!login) login = 'Гость';
    const onlyInfo = await Tea.findOne({ where: { id }, raw: true });
    const comments = await Comment.findAll({ where: { tea_id: id }, include: { model: User }, raw: true });
    const oneUser = await User.findOne({ where: { login }, raw: true });
    render(InfoTea, {
      onlyInfo, comments, oneUser, newUser, role,
    }, res);
  } catch (error) {
    console.log(error);
  }
});

route.post('/:id', async (req, res) => {
  const { text, id1 } = req.body;
  const { id } = req.params;
  try {
    const newCom = await Comment.create({ user_id: id1, tea_id: id, text });
    res.json(newCom);
  } catch (error) {
    console.log(error);
  }
});

route.delete('/deleteCom', async (req, res) => {
  try {
    const { id } = req.body;
    await Comment.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
});

module.exports = route;
