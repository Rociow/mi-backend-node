const express = require('express');
const app = express();
const usuariosRoutes = require('./routes/usuarios');

app.use(express.json());

// rutas
app.use('/usuarios', usuariosRoutes);

app.listen(3000, () => {
  console.log("Servidor funcionando en http://localhost:3000");
});
