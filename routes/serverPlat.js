var express = require('express');
var router = express.Router();
var Mock = require('mockjs')
const { Random } = Mock
/* GET home page. */
router.post('/transStat/initChat.json', function(req, res, next) {
  const ret = genData(req.body)
  res.send(ret)
});

/* GET  */
router.get('/transStat/findInsStat.json', function(req, res, next) {
  const ret = genInsStat(req.body)
  res.send(ret)
});

function genInsStat() {
  return Mock.mock({
    status: 0,
    data: {
      'sumAmtDay|1000000-2000000': 0,
      'transCountDay|10000-30000': 0,
      'sumAmtMonth|100000000-500000000': 0,
      'transCountMonth|100000-500000': 0,
      'newMerCountDay|100-500': 0,
      'newMerCountMonth|10000-5000': 0,
    }
  })
}

function genData(params) {
  const { rangeType, statType } = params
  switch (statType) {
    case 'trans_scan':
      return genTransOvcData(rangeType)
      break;
    case 'trans_ovc':
      return genTransOvcData(rangeType)
      break;
    case 'mer_scan':
      return genMerScanData(rangeType)
      break;
    case 'mer_ovc':
      return genMerScanData(rangeType)
      break;
      break;
  
    default:
      break;
  }
}

function genTransOvcData(rangeType) {
  let ret
  switch (rangeType) {
    case 'week':
      ret = Mock.mock({
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
      break;
    case 'month':
      ret = Mock.mock({
        status: 0,
        data: {
          'list|20': [
            {
              'currentValue|100-300': 1,
              'thirtyDayValue|50-250': 1,
              date: Random.datetime()
            }
          ]
        }
      })
      break;
    case 'year':
      ret = Mock.mock({
        status: 0,
        data: {
          'list|12': [
            {
              'currentValue|100-300': 1,
              'thirtyDayValue|50-250': 1,
              date: Random.datetime()
            }
          ]
        }
      })
      break;
    case 'day':
      ret = Mock.mock({
        status: 0,
        data: {
          'list|12': [
            {
              'currentValue|100-300': 1,
              'thirtyDayValue|50-250': 1,
              date: Random.datetime()
            }
          ]
        }
      })
      break;
    default:
      break;
  }
  return ret
}

function genMerScanData(rangeType) {
  let ret
  switch (rangeType) {
    case 'week':
      ret = Mock.mock({
        status: 0,
        data: {
          'list|7': [
            {
              'value|100-300': 0,
              date: Random.datetime()
            }
          ]
        }
      })
      break;
    case 'month':
      ret = Mock.mock({
        status: 0,
        data: {
          'list|20': [
            {
              'value|100-300': 0,
              date: Random.datetime()
            }
          ]
        }
      })
      break;
    case 'year':
      ret = Mock.mock({
        status: 0,
        data: {
          'list|12': [
            {
              'value|100-300': 0,
              date: Random.datetime()
            }
          ]
        }
      })
      break;
    case 'day':
      ret = Mock.mock({
        status: 0,
        data: {
          'list|12': [
            {
              'value|100-300': 0,
              date: Random.datetime()
            }
          ]
        }
      })
      break;
    default:
      break;
  }
  return ret
}
module.exports = router;
