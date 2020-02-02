var express = require('express');
var router = express.Router();
var Mock = require('mockjs')
const { Random } = Mock
/* GET home page. */
router.post('/findInsStat.json', function(req, res, next) {
  res.send({
    msg: 'ok'
  })
});

module.exports = router;
