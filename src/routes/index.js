var express = require('express');
const router = express.Router();

const { home } = require('../controllers');

/* GET home page. */
router.get('/', home);

module.exports = router;
