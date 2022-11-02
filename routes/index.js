var express = require('express');
var router = express.Router();

const index_controller = require('../controllers/indexController');
const item_controller = require('../controllers/itemController');
const category_controller = require('../controllers/categoryController');

// GET home page
router.get('/', index_controller);

// GET create item
router.get('/item/create', item_controller.getCreateItem);

// GET update item
router.get('/item/:id/update', item_controller.getUpdateItem);

// GET delete item
router.get('/item/:id/delete', item_controller.getDeleteItem);

// POST create item
router.post('/item/create', item_controller.postCreateItem);

// POST update item
router.post('/item/:id/update', item_controller.postUpdateItem);

// POST delete item
router.post('/item/:id/delete', item_controller.postDeleteItem);

// GET Item
router.get('/item/:id', item_controller.getItem);

// GET create Category
router.get('/category/create', category_controller.getCreateCategory);

// GET update Category
router.get('/category/:id/update', category_controller.getUpdateCategory);

// GET delete Category
router.get('/category/:id/delete', category_controller.getDeleteCategory);

// POST create Category
router.post('/category/create', category_controller.postCreateCategory);

// POST update Category
router.post('/category/:id/update', category_controller.postUpdateCategory);

// POST delete Category
router.post('/category/:id/delete', category_controller.postDeleteCategory);

// GET Category
router.get('/category/:id', category_controller.getCategory);

module.exports = router;