const express = require('express');
const router = express.Router();
const {
  registerClient,
  registerPrestataire,
  login
} = require('../controllers/authController');

router.post('/register/client', registerClient);
router.post('/register/prestataire', registerPrestataire);
router.post('/login', login);

module.exports = router;
