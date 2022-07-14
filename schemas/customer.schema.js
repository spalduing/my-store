const Joi = require('joi');

// customer_info
const id = Joi.number().integer();
const name = Joi.string();
const lastName = Joi.string();
const phone = Joi.string().min(10);
const userId = Joi.number().integer();

// user_info
const email = Joi.string().email().required();
const password = Joi.string().min(8).required();
const role = Joi.string().min(5).required();

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone,
  user: Joi.object({ email, password, role }),
});

const updateCustomerSchema = Joi.object({
  name,
  lastName,
  phone,
  userId,
});

const getCustomerSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createCustomerSchema,
  updateCustomerSchema,
  getCustomerSchema,
};
