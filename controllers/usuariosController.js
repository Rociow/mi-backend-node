let usuarios = require('../data/usuarios');

function getUsuarios(req, res) {
  res.json(usuarios);
}

function crearUsuario(req, res) {
  const { nombre, edad } = req.body;

  //throw new Error("Falló la creación!");

  const nuevo = {
    id: Date.now(),
    nombre,
    edad
  };

  usuarios.push(nuevo);

  res.status(201).json(nuevo);
}

function borrarUsuario(req, res) {
  const id = Number(req.params.id);

  usuarios = usuarios.filter(u => u.id !== id);

  res.json({ mensaje: "Usuario eliminado" });
}

module.exports = {
  getUsuarios,
  crearUsuario,
  borrarUsuario
};