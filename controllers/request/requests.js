const { Op } = require("sequelize");
const { Request } = require('../../models/request');

const requests = async (req, res) => {
    const user_id = req.params.id;
    const page = parseInt(req.query.page) || 1;    // Página actual, por defecto 1
    const limit = parseInt(req.query.limit) || 10; // Número de registros por página, por defecto 10
    const search = parseInt(req.query.search) || ''; // Número de registros por página, por defecto 10
    const offset = (page - 1) * limit;

    try {
        // Obtener request por paginacion
        let where = {
            employee_id: user_id
        };
        if (search != '') {
            where = {
                code: {
                    [Op.like]: `'%${search}%'`
                }
            }
        }
        let dataRequest = await Request.findAll({ limit, offset, where });
        res.json({ data: dataRequest });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

module.exports = requests;
