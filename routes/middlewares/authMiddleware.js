const jwt = require('jsonwebtoken');

exports.validateToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ msg: 'No hay token, permiso denegado' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = decoded;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token inválido' });
    }
};

exports.verifyRol = (rol) => (req, res, next) => {
    if (rol.includes(req.param.rol_id)) {
        return res.status(403).json({ msg: 'Acceso denegado' });
    }
    next();
};