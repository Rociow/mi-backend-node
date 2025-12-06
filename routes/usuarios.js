const express = require('express');
const router = express.Router();
const validarUsuario = require('../middlewares/validarUsuario');
const { obtenerUsuarios, crearUsuario, actualizarUsuario, borrarUsuario } =
  require('../controllers/usuariosController');

router.get('/', obtenerUsuarios);
router.post('/', validarUsuario, crearUsuario);
router.put('/:id', validarUsuario, actualizarUsuario);
router.delete('/:id', borrarUsuario);

module.exports = router;
