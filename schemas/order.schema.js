const Joi = require('joi');

const id = Joi.number().integer();

const createOrderSchema = Joi.object({
  custumerId: id.required(),
});

const updateOrderSchema = Joi.object({
  custumerId: id.required(),
});

const getOrderSchema = Joi.object({
  id: id.required(),
});

module.exports = { createOrderSchema, updateOrderSchema, getOrderSchema };
