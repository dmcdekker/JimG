var express = require('express');
var router = express.Router();

var ctrlMain = require('../controllers/main');

/* GET home page.*/
router.get('/',ctrlMain.homepage);

/* GET about page. */ 
router.get('/about', ctrlMain.about);

/* GET portfolio page. */ 
router.get('/portfolio', ctrlMain.portfolio);

/* GET radio page. */ 
router.get('/dtour', ctrlMain.dtour);


module.exports = router;
