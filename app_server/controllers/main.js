/* GET home page.*/
module.exports.homepage = function (req, res){
     res.render('homepage',{title: 'Jim Granato'});
};

module.exports.films = function (req, res){
    res.render('films',{title: 'Films'});
};

module.exports.portfolio = function (req, res){
    res.render('portfolio',{title: 'Portfolio'});
};

module.exports.radio = function (req, res){
    res.render('radio',{title: 'Radio'});
};

module.exports.about = function (req, res){
    res.render('about',{title: 'About'});
};
