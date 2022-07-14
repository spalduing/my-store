const boom = require('@hapi/boom');

const sequelize = require('../libs/sequelize');
class UserService {
  constructor() {}

  async create(data) {
    const newUser = await sequelize.models.User.create(data);
    if (!newUser) {
      throw boom.badData('wrong properties for an user');
    }
    return newUser;
  }

  async find() {
    const rta = await sequelize.models.User.findAll({ include: ['customer'] });
    return rta;
  }

  async findOne(id) {
    const user = await sequelize.models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);

    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await this.findOne();
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
