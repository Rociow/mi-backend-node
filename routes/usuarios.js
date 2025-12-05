const express = require('express');
const router = express.Router();
const { getUsuarios, crearUsuario, borrarUsuario } =
  require('../controllers/usuariosController');

router.get('/', getUsuarios);
router.post('/', crearUsuario);
router.delete('/:id', borrarUsuario);

module.exports = router;
