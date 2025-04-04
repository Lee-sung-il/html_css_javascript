const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const AppError = require('../Middleware_Intro/APPError');

const Product = require('./models/Product');
const res = require('express/lib/response');

mongoose
  .connect('mongodb://127.0.0.1:27017/farmStand')
  .then(() => {
    console.log('MONGO CONNECTION OPEN!!!!');
  })
  .catch((err) => console.log('OH NO MONGO CONNECTION ERROR!!!!\n', err));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const categories = ['fruit', 'vegetable', 'dairy'];

app.get(
  '/products',
  wrapAsync(async (req, res, next) => {
    const { category } = req.query;
    if (category) {
      const products = await Product.find({ category });
      res.render('products/index', { products: products, category });
    } else {
      const products = await Product.find({});
      res.render('products/index', { products: products, category: 'All' });
    }
  }),
);

app.get('/products/new', (req, res) => {
  res.render('products/new', { categories: categories });
});

app.post(
  '/products',
  wrapAsync(async (req, res, next) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct.id}`);
  }),
);

function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((e) => next(e));
  };
}

app.get(
  '/products/:id',
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      throw new AppError('Product not found', 404);
    }
    console.log(product);
    res.render('products/show', { product: product });
  }),
);

app.get(
  '/products/:id/edit',
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      throw new AppError('Product not found', 404);
    }
    res.render('products/edit', { product, categories });
  }),
);

app.delete(
  '/products/:id',
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
  }),
);

app.put(
  '/products/:id',
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    res.redirect(`/products/${product._id}`);
  }),
);

const handleValidationErr = (err) => {
  console.dir(err);
  return new AppError(`Validation failed...${err.message}`, 400);
};

app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === 'ValidationError') {
    err = handleValidationErr(err);
  }
  next(err);
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Something went wrong' } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log('APP IS LISTENING ON PORT 3000!');
});
