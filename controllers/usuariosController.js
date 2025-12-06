let usuarios = require('../data/usuarios');
const { getAllUsers, createUser } = require("../db/userQueries");

async function getUsuarios(req, res, next) {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
}

async function crearUsuario(req, res, next) {
  try {
    const { name, email } = req.body;
    const newUser = await createUser(name, email);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
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