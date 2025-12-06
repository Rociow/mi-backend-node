const express = require('express');
const app = express();

const logger = require('./middlewares/logger');
const manejadorErrores = require('./middlewares/manejadorErrores')
const usuariosRoutes = require('./routes/usuarios');

app.use(logger); // <--- ACTIVAMOS EL MIDDLEWARE

app.use(express.json());

// rutas
app.use('/usuarios', usuariosRoutes);

// manejador de errores (siempre al final)
app.use(manejadorErrores);

app.listen(3000, () => {
  console.log("Servidor funcionando en http://localhost:3000");
});
