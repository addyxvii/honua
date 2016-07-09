var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  var products = {'products'}
  res.json(products);
});

module.exports = router;
