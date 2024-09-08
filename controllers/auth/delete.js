const { User } = require('../../models/user');

const deleteU = async (req, res) => {
    const user_id = req.params.id;
    try {
        await User.destroy({
            where: { id: user_id }
        });
        res.status(201).json({ msg: 'Usuario eliminado correctamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Error al eliminar usuario' });
    }
};

module.exports = deleteU;
