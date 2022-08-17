const router = require('express').Router();

const Profile = require('../views/Profile');
const Error = require('../views/Error');
const ShowTea = require('../views/ShowTea');
const EditTea = require('../views/EditTea');
const NewTea = require('../views/NewTea');


const renderTemplate = require('../../lib/renderReactModule');

const { Tea, Comment, User } = require('../../db/models');

router.get('/profile', async (req, res) => {
  try {
    const { newUser, role } = req.session;
    const teaInforms = await Tea.findAll({ order: [['id']] });
    const { id } = await User.findOne({ where: {login: newUser}, raw: true });
    const teaComments = await Comment.findAll({
      where: { user_id: id }, raw: true,
    });
    renderTemplate(Profile, { teaInforms, teaComments, role, newUser }, res);
  } catch (error) {
    renderTemplate(Error, {
      message: 'Не удалось получить записи из базы данных.',
      error: {},
    }, res);
  }
});

router.get('/profile/newtea', async (req, res) => {
  try {
    const { newUser, role } = req.session;
    renderTemplate(NewTea, {newUser}, res);
  } catch (error) {
    renderTemplate(Error, {
      message: 'Запись не найдена.',
      error: {},
    }, res);
  }
});

router.post('/profile/newtea', async (req, res) => {
  const {
    title, location, image_url, discription, sort_tea,
  } = req.body;
  try {
    const newTea = await Tea.create({
      title, location, image_url, discription, sort_tea,
    }, {
      returning: true,
      plain: true,
    });
    
    res.redirect(`/profile/${newTea.id}`);
  } catch (error) {
    console.error('error=============', error);
    renderTemplate(Error, {
      message: 'Не удалось добавить запись в базу данных.',
      error: {},
    }, res);
  }
});

router.get('/profile/:id', async (req, res) => {
  try {
    const { newUser, role } = req.session;
    const oneTea = await Tea.findOne({ where: { id: req.params.id } });
    renderTemplate(ShowTea, { oneTea, newUser }, res);
  } catch (error) {
    renderTemplate(Error, {
      message: 'Не удалось получить записи из базы данных.',
      error: {},
    }, res);
  }
});

router.get('/profile/:id/edit', async (req, res) => {
  try {
    const { newUser, role } = req.session;
    const oneTea = await Tea.findOne({ where: { id: req.params.id } });
    renderTemplate(EditTea, { oneTea, newUser }, res);
  } catch (error) {
    renderTemplate(Error, {
      message: 'Запись не найдена.',
      error: {},
    }, res);
  }
});

router.patch('/profile/:id', async (req, res) => {
  const {
    title, location, image_url, discription, sort_tea,
  } = req.body.obj;

  try {
    await Tea.update({
      title, location, image_url, discription, sort_tea,
    }, {
      where: { id: req.params.id },
      returning: true,
      plain: true,
    });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.delete('/profile/:id', async (req, res) => {
  try {
    await Tea.destroy({ where: { id: req.params.id } });
    res.json({ isDeleteSuccessful: true });
  } catch (error) {
    res.json({
      isDeleteSuccessful: false,
      errorMessage: 'Не удалось удалить запись из базы данных.',
    });
  }
});

module.exports = router;