const express = require('express')
const router = express.Router();
const data = require('./data')
router.use((req, res, next) => {
  let id = req.query.id;
  let dealData = `artiList(${JSON.stringify(data)})`
  res.send({
    title: 'mock数据',
    data: dealData
  })
  return;
});

module.exports = router;
