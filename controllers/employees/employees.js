const { Employee } = require('../../models/employee');
const { Op } = require("sequelize");

const employees = async (req, res) => {
    const page = parseInt(req.query.page) || 1;    // Página actual, por defecto 1
    const limit = parseInt(req.query.limit) || 10; // Número de registros por página, por defecto 10
    const search = parseInt(req.query.search) || ''; // Número de registros por página, por defecto 10
    const offset = (page - 1) * limit;

    try {
        // Obtener request por paginacion
        let where = {};
        if (search != '') {
            where = {
                name: {
                    [Op.like]: `'%${search}%'`
                }
            }
        }

        let dataEmployee = await Employee.findAll({ limit, offset, where });

        res.json({ data: dataEmployee });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

module.exports = employees;
