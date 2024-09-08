const { Rol } = require('../models/rol');
const { User } = require('../models/user');

const setDataInit = () => {
    Rol.create({ name: 'Administrador' })
    Rol.create({ name: 'Empleado' })
    
    User.create({
        name: 'Administrador',
        email: 'admin@admin.com',
        password: '$2b$10$3x.nmIg9kTNJpOInRQ6kIuRTMwPZ77YnsAU58Muwt6Dxu5QaPLLAq', // 1234
        rol_id: 1
    })
}

module.exports = setDataInit;
