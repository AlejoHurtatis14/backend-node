const express = require('express');
const router = express();
// Consultas
const register = require('../../controllers/request/register');
const request = require('../../controllers/request/request');
const requests = require('../../controllers/request/requests');
const deleteR = require('../../controllers/request/delete');
// Middlewares
const { verifyRol } = require('../middlewares/authMiddleware');

// Registrar rutas
router.post('/register', [verifyRol(['1'])], register);
router.delete('/:id', [verifyRol(['1'])], deleteR);
router.get('/list/:id', [verifyRol(['1', '2'])], requests);
router.get('/:id', [verifyRol(['1', '2'])], request);

module.exports = router;
