const express = require('express');
const router = express.Router();
const {getUsers, saveUser} = require("../controllers/users.controller")

router.get('/users',getUsers);
router.post('/users',saveUser);

module.exports = router;