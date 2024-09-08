const { Employee } = require('../../models/employee');

const register = async (req, res) => {
    const { income_date, name, salary } = req.body;

    try {
        // Guardamos el empleado
        await Employee.create({ income_date, name, salary });

        res.status(201).json({ msg: 'Empleado registrado correctamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Error al guardar empleado' });
    }
};

module.exports = register;
