module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      login: 'Admin',
      password: '123',
      user_role: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      login: 'Marina',
      password: '123',
      user_role: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      login: 'Anton',
      password: '123',
      user_role: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      login: 'Andrew',
      password: '123',
      user_role: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      login: 'Shamil',
      password: '123',
      user_role: null,
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
