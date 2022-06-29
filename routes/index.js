var express = require('express');
var path=require("path");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index1', { title: 'Express',name:'Sahithi' });
});
router.get('/alert', function(req, res, next) {
  //res.render('index1', { title: 'Express',name:'Sahithi' });
  res.sendFile(path.resolve("public/Alert_box.html"));
});

module.exports = router;
