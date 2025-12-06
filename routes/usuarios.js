const express = require('express');
const router = express.Router();
const validarUsuario = require('../middlewares/validarUsuario');
const { getUsuarios, crearUsuario, borrarUsuario } =
  require('../controllers/usuariosController');

router.get('/', getUsuarios);
router.post('/', validarUsuario, crearUsuario);
router.delete('/:id', borrarUsuario);

module.exports = router;
