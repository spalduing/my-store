'use strict';

const { UserSchema, USER_TABLE } = require('../models/user.model');
// const { UserSchema, USER_TABLE } = require('../models/x1.model');
// const { UserSchema, USER_TABLE } = require('../models/x2.model');
// const { UserSchema, USER_TABLE } = require('../models/x3.model');
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  async down(queryInterface) {
    await queryInterface.drop(USER_TABLE);
  },
};
