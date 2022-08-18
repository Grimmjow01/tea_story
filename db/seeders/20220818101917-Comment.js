module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [{
      user_id: '2',
      tea_id: '7',
      text: 'Хороший чай, всем советую.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: '2',
      tea_id: '11',
      text: 'На любителя. Пейте на свой страх и риск.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: '3',
      tea_id: '7',
      text: 'Вполне неплохо.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: '3',
      tea_id: '11',
      text: 'Очень вкусный и насыщенный.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: '5',
      tea_id: '7',
      text: 'Мне не понравился, кофе ФОРЕВА!',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: '4',
      tea_id: '11',
      text: 'Странное зелье, непонятный вкус.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: '4',
      tea_id: '7',
      text: 'Это что за зеленый порошок? Чай для ХАЛКА?',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: '5',
      tea_id: '11',
      text: 'Вкусно и точка.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: '3',
      tea_id: '16',
      text: 'Это не чай! Не вводите людей в заблуждение.',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
