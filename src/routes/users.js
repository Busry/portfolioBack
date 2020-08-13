const express = require('express');
const { allUsers } = require('../controllers/users');

const router = express.Router();

/* GET users listing. */
router.get('/', allUsers);

module.exports = router;
