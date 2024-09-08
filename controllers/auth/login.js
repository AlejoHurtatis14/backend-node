const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../../models/user');

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const usuario = await User.findAll({ where: { email } });

        if (usuario.length === 0) {
            return res.status(400).json({ msg: 'Credenciales incorrectas' });
        }

        // Verifica contraseña
        const contrasenaValida = await bcrypt.compare(password, usuario[0].password);
        if (!contrasenaValida) {
            return res.status(400).json({ msg: 'Credenciales incorrectas' });
        }

        // Crea token
        const token = jwt.sign(
            { id: usuario[0].id, rol_id: usuario[0].rol_id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        const userReturn = await User.findOne({ where: { email }, attributes: { exclude: ['password'] } });

        res.json({ token, usuario: userReturn });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Error al iniciar sesion' });
    }
};

module.exports = login;
