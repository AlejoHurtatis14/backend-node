const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const { Employee } = require('./employee');

const Request = sequelize.define('Request', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    code: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    resume: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, { tableName: 'requests' });

// Una solicitud le pertene a un empleado
Request.belongsTo(Employee, {
    foreignKey: 'employee_id',
    onDelete: 'CASCADE'
});

// Un empleado tiene muchas solicitudes como relacion inversa
Employee.hasMany(Request, {
    foreignKey: 'employee_id'
});

module.exports = {
    Request
};