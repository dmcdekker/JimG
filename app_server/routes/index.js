var express = require('express');
var router = express.Router();

var ctrlMain = require('../controllers/main');

/* GET home page.*/
router.get('/',ctrlMain.homepage);

/* GET about page. */ 
router.get('/about', ctrlMain.about);

/* GET portfolio page. */ 
router.get('/portfolio', ctrlMain.portfolio);

/* GET films page. */ 
router.get('/films', ctrlMain.films);

/* GET radio page. */ 
router.get('/radio', ctrlMain.radio);


module.exports = router;
