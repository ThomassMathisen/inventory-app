const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');
const itemController = require('../controllers/item');
const categoryController = require('../controllers/category');

// GET home page
router.get('/', indexController.index);

router.get('/item/create', itemController.getCreateItem);

router.post('/item/create', itemController.postCreateItem);

router.get('/item/:id/update', itemController.getUpdateItem);

router.post('/item/:id/update', itemController.postUpdateItem);

router.get('/item/:id/delete', itemController.getDeleteItem);

router.post('/item/:id/delete', itemController.postDeleteItem);

router.get('/item/:id/', itemController.getItem);

router.get('/category/create', categoryController.getCreateCategory);

router.post('/category/create', categoryController.postCreateCategory);

router.get('/category/:id/update', categoryController.getUpdateCategory);

router.post('/category/:id/update', categoryController.postUpdateCategory);

router.get('/category/:id/delete', categoryController.getDeleteCategory);

router.post('/category/:id/delete', categoryController.postDeleteCategory);

router.get('/category/:id', categoryController.getCategory);

module.exports = router