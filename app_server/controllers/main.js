/* GET home page.*/
module.exports.homepage = function (req, res){
     res.render('homepage',{title: 'Jim Granato'});
};

module.exports.portfolio = function (req, res){
    res.render('portfolio',{title: 'Portfolio'});
};

module.exports.dtour = function (req, res){
    res.render('dtour',{title: 'D Tour'});
};

module.exports.about = function (req, res){
    res.render('about',{title: 'About'});
};
