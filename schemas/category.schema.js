const Joi = require('joi');

// const { createProductSchema } = require('./product.schema');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const image = Joi.string().uri();

const createCategorySchema = Joi.object({
  name: name.required(),
  image: image.required(),
  // products: Joi.array().items(createProductSchema),
});

const updateCategorySchema = Joi.object({
  name: name,
  image: image,
});

const getCategorySchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createCategorySchema,
  updateCategorySchema,
  getCategorySchema,
};
