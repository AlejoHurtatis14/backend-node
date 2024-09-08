const { Request } = require('../../models/request');

const register = async (req, res) => {
    const { code, description, resume, employee_id } = req.body;

    try {
        // Guardamos la solicitud
        await Request.create({ code, description, resume, employee_id });
        res.status(201).json({ msg: 'Solicitud registrada correctamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Error al guardar solicitud' });
    }
};

module.exports = register;

