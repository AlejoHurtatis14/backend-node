const { User } = require('../../models/user');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
    const { name, email, password, rol_id } = req.body;

    try {
        let userFind = await User.findAll({
            where: { email }
        });

        // Verificar si usuario existe
        if (userFind.length > 0) {
            return res.status(400).json({ msg: 'El usuario ya está registrado' });
        }

        // Encriptar contraseña
        const salt = await bcrypt.genSalt(10);
        let passwordCrypt = await bcrypt.hash(password, salt);

        await User.create({ name, email, password: passwordCrypt, rol_id })

        res.status(201).json({ msg: 'Usuario registrado correctamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Error al registrar usuario' });
    }
};

module.exports = register;
