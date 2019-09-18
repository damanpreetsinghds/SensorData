var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/save', function (req, res, next) {
  const { temperature, pH } = req.body;
  res.send({ success: true, temperature, pH });
});

module.exports = router;
