 function validarUsuario(req, res, next) {
    const { name } = req.body;
    if (!name || name.trim() === '') {
        return res.status(400).json({ error: "El campo 'nombre' es obligatorio"});
    }

    next(); // si esta todo bien sigue
}

module.exports = validarUsuario;
