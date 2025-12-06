const express = require('express');
const logger = require('./middlewares/logger');
const app = express();
const usuariosRoutes = require('./routes/usuarios');

app.use(logger); // <--- ACTIVAMOS EL MIDDLEWARE

app.use(express.json());

// rutas
app.use('/usuarios', usuariosRoutes);

app.listen(3000, () => {
  console.log("Servidor funcionando en http://localhost:3000");
});
