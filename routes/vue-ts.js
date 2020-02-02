var express = require('express');
var router = express.Router();
var Mock = require('mockjs')
const { Random } = Mock
/* GET home page. */
router.get('/user/list', function(req, res, next) {
  const ret = genData(req.body)
  res.send(ret)
});


function genData(params) {
  return Mock.mock({
    status: 0,
    msg: 'ok',
    data: {
      page: 1,
      size: 10,
      total: 6,
      'data|6': [
        {
          name: '@first',
          'age|10-30': 1
        }
      ]
    }
  })
}

function genTransOvcData() {
  const ret = Mock.mock({
    status: 0,
    data: {
      'list|7': [
        {
          'currentValue|100-300': 1,
          'thirtyDayValue|50-250': 1,
          date: Random.datetime()
        }
      ]
    }
  })
  return ret
}
module.exports = router;
