//let usuarios = require('../data/usuarios'); base de datos local
const { getAllUsers, createUser, updateUser, deleteUser } = require("../db/userQueries");

async function obtenerUsuarios(req, res, next) {
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

async function actualizarUsuario(req, res, next) {
  try {
    const id = Number(req.params.id);
    const { name, email } = req.body;
    const updatedUser = await updateUser(name, email, id);
    if (!updatedUser) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(updatedUser)
  } catch (err) {
    next(err);
  }
}

async function borrarUsuario(req, res, next) {
  try {
    const id = Number(req.params.id);
    const deletedUser = await deleteUser(id);
    if (!deletedUser) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(deletedUser)
  } catch (err) {
    next(err);
  }
}

module.exports = {
  obtenerUsuarios,
  crearUsuario,
  actualizarUsuario,
  borrarUsuario
};