const express = require('express');
const router = express();
// Consultas
const register = require('../../controllers/employees/register');
const employee = require('../../controllers/employees/employee');
const employees = require('../../controllers/employees/employees');
// Middlewares
const { verifyRol } = require('../middlewares/authMiddleware');

// Registrar rutas
router.post('/register', [verifyRol(['1'])], register);
router.get('/list', [verifyRol(['1', '2'])], employees);
router.get('/:id', [verifyRol(['1', '2'])], employee);

module.exports = router;
