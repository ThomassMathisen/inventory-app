const express = require('express');
const router = express.Router();

const index_controller = require('../controllers/indexController');
const item_controller = require('../controllers/itemController');
const category_controller = require('../controllers/categoryController');

// GET home page
router.get('/', index_controller);

router.get('/item/create', item_controller.getCreateItem);

router.post('/item/create', item_controller.postCreateItem);

router.get('/item/:id/update', item_controller.getUpdateItem);

router.post('/item/:id/update', item_controller.postUpdateItem);

router.get('/item/:id/delete', item_controller.getDeleteItem);

router.post('/item/:id/delete', item_controller.postDeleteItem);

router.get('/item/:id/', item_controller.getItem);

router.get('/category/create', category_controller.getCreateCategory);

router.post('/category/create', category_controller.postCreateCategory);

router.get('/category/:id/update', category_controller.getUpdateCategory);

router.post('/category/:id/update', category_controller.postUpdateCategory);

router.get('/category/:id/delete', category_controller.getDeleteCategory);

router.post('/category/:id/delete', category_controller.postDeleteCategory);

router.get('/category/:id', category_controller.getCategory);

module.exports = router