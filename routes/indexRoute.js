const express = require('express');

const router = express.Router();

const indexGetController = require('../controllers/index/get');
const detailsGetController = require('../controllers/details/get');

router.get(
  '/',
    indexGetController
);
router.get(
  '/details',
    detailsGetController
);

module.exports = router;
