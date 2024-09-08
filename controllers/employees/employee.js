const { Employee } = require('../../models/employee');

const employee = async (req, res) => {
    const { idEmployee } = req.params.id;
    try {
        // Buscar usuario por email
        const usuario = Employee.findByPk(idEmployee);
        res.json({ data: usuario });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

module.exports = employee;
