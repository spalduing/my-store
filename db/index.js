const { User, UserSchema } = require('./models/user.model');
const { Customer, CustomerSchema } = require('./models/customer.model');
const { Category, CategorySchema } = require('./models/category.model');
const { Product, ProductSchema } = require('./models/product.model');
const { Order, OrderSchema } = require('./models/order.model');

const setupModels = (sequelize) => {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));

  Customer.associate(sequelize.models);
  User.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  Order.associate(sequelize.models);
};

module.exports = setupModels;
