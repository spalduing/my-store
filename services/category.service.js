const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CategoryService {
  constructor() {}
  async create(data) {
    const newCategory = await models.Category.create(data);
    if (!newCategory) {
      throw boom.badData('wrong properties for a category');
    }
    return newCategory;
  }

  async find() {
    const rta = await models.Category.findAll({ include: ['products'] });
    return rta;
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id);
    if (!category) {
      throw boom.badData('wrong properties for a category');
    }
    return category;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = CategoryService;
