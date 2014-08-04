var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/nodetest', function(req, res) {
  res.render('nodeServiceTest', { title: 'Express' });
});


module.exports = router;
