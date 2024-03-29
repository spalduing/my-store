const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer();
const description = Joi.string().min(10);
const image = Joi.string().uri();
const categoryId = id;

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
  description,
  categoryId: categoryId.required(),
});

const updateProductSchema = Joi.object({
  name,
  price,
  image,
  description,
  categoryId,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
