var express = require('express');
var router = express.Router();
var Mock = require('mockjs')
const { Random } = Mock
/* GET home page. */
router.post('/transStat/findInsStat.json', function(req, res, next) {
  const ret = genData(req.body)
  res.send(ret)
});


function genData(params) {
  const { rangeType, statType } = params
  switch (statType) {
    case 'trans_ovc':
      return genTransOvcData()
      break;
    case 'trans_scan':
      
      break;
    case 'mer_ovc':
      
      break;
    case 'mer_scan':
      
      break;
  
    default:
      break;
  }
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
