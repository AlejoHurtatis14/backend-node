const { Request } = require('../../models/request');

const register = async (req, res) => {
    const employee_id = req.params.id;

    try {
        // Eliminamos la solicitud
        await Request.destroy({
            where: { id: employee_id }
        });
        res.status(201).json({ msg: 'Solicitud eliminada correctamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Error al eliminar solicitud' });
    }
};

module.exports = register;

