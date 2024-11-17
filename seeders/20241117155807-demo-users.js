'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [
      {
        name: 'Admin Example',
        email: 'admin@example.com',
        username: 'adminexample',
        password: 'password',
        usertype: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'User Example',
        email: 'user@example.com',
        username: 'userexample',
        password: 'password',
        usertype: 'normal',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'User 2 Example',
        email: 'user2@example.com',
        username: 'user2example',
        password: 'password',
        usertype: 'normal',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
