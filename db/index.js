const { User, UserSchema } = require('./models/user.model');

const setupModels = (sequelize) => {
  User.init(UserSchema, User.config(sequelize));
};

module.exports = setupModels;
