const { Request } = require('../../models/request');

const request = async (req, res) => {
    const idRequest = req.params.id;
    try {
        // Obtener un request
        const request = await Request.findByPk(idRequest);
        res.json({ data: request });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

module.exports = request;
