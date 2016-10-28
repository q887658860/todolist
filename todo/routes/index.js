var express = require('express');
var router = express.Router();
var dbdo = require('../model/dbdo');

/* GET home page. */
router.get('/', dbdo.displayAll);
router.post('/create', dbdo.createItem);
router.get('/delete/:id', dbdo.deleteItem);
router.get('/edit/:id', dbdo.editItem);
router.post('/update/:id', dbdo.updateItem);
router.get('/displaySortByContent', dbdo.displaySortByContent);




module.exports = router;








