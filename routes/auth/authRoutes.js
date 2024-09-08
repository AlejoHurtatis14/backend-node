const express = require('express');
const router = express();
// Consultas
const register = require('../../controllers/auth/register');
const login = require('../../controllers/auth/login');
const users = require('../../controllers/auth/users');
const deleteU = require('../../controllers/auth/delete');

// Registrar rutas
router.get('/list', users);
router.post('/register', register);
router.post('/login', login);
router.delete('/:id', deleteU);

module.exports = router;
