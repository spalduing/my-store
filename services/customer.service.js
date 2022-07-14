const boom = require('@hapi/boom');

const sequelize = require('../libs/sequelize');
class CustomerService {
  constructor() {}

  async create(data) {
    const newCustomer = await sequelize.models.Customer.create(data);
    if (!newCustomer) {
      throw boom.badData('wrong properties for a customer');
    }
    return newCustomer;
  }

  async find() {
    const rta = await sequelize.models.Customer.findAll({
      include: ['user'],
    });
    return rta;
  }

  async findOne(id) {
    const customer = await sequelize.models.Customer.findByPk(id);
    if (!customer) {
      throw boom.notFound('customer not found');
    }
    return customer;
  }

  async update(id, changes) {
    const customer = await this.findOne(id);

    const rta = await customer.update(changes);
    return rta;
  }

  async delete(id) {
    const customer = await this.findOne();
    await customer.destroy();
    return { id };
  }
}

module.exports = CustomerService;
