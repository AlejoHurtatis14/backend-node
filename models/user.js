const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const { Rol } = require('./rol');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, { tableName: 'users' });

// Un usuario le pertene un rol
User.belongsTo(Rol, {
  foreignKey: 'rol_id',
  onDelete: 'SET NULL'
});

// Un rol tiene muchos usuarios como relacion inversa
Rol.hasMany(User, {
  foreignKey: 'rol_id'
});

module.exports = {
  User
};