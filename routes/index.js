var express = require('express');
var router = express.Router();

// Set up global object
var global = {
  
  title:"ponie.club",
  desc: ""
  
};

/* GET home */
router.get('/', function(req, res) {
	
  
  res.render('home', { 
    page: 'Home',
    global: global
  });
  
  
});

module.exports = router;