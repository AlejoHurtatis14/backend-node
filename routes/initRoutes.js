const express = require('express');

// Rutas
const authRoutes = require('./auth/authRoutes');
const employeeRoutes = require('./employee/employeeRoutes');
const requestRoutes = require('./request/requestRoutes');

// Middlewares
const { validateToken } = require('./middlewares/authMiddleware');

const initRoutes = (app) => {
    // Rutas auth
    app.use('/api/auth', authRoutes);
    
    // Rutas empleados
    app.use('/api/employee', validateToken, employeeRoutes);
    
    // Rutas solicitudes
    app.use('/api/request', validateToken, requestRoutes);
}

module.exports = initRoutes;
