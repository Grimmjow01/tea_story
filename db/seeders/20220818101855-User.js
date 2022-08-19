module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      login: 'Admin',
      password: '$2b$10$rfxqRuVruSEZyTxSPd.xW.vpHRsBIR.fh0nAw66B5XFjcBg9TBbXu',
      user_role: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      login: 'Marina',
      password: '$2b$10$rfxqRuVruSEZyTxSPd.xW.vpHRsBIR.fh0nAw66B5XFjcBg9TBbXu',
      user_role: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      login: 'Anton',
      password: '$2b$10$rfxqRuVruSEZyTxSPd.xW.vpHRsBIR.fh0nAw66B5XFjcBg9TBbXu',
      user_role: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      login: 'Andrew',
      password: '$2b$10$rfxqRuVruSEZyTxSPd.xW.vpHRsBIR.fh0nAw66B5XFjcBg9TBbXu',
      user_role: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      login: 'Shamil',
      password: '$2b$10$rfxqRuVruSEZyTxSPd.xW.vpHRsBIR.fh0nAw66B5XFjcBg9TBbXu',
      user_role: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      login: 'Гость',
      password: '123',
      user_role: null,
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
