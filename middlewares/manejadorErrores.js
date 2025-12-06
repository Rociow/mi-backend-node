function manejadorErrores(err, req, res, next) {
    console.error("ERROR:", err.message);

    res.status(500).json({
        error: "Error interno del servidor",
        detalle: err.message
    });
}

module.exports = manejadorErrores;