const { User } = require('../../models/user');
const { Op } = require("sequelize");

const register = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: { exclude: ['password'] },
            where: {
                id: {
                    [Op.not]: '1'
                }
            }
        });
        res.status(201).json({ data: users });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Error al obtener usuarios' });
    }
};

module.exports = register;
