const express = require('express');
const app = express();

// Para que el servidor pueda leer JSON
app.use(express.json());

//Base de datos temporal en memoria
let usuarios = [
    {id: 1, nombre: 'Juan'},
    {id: 2, nombre: 'Ana'}
];

// Ruta simple para probar
app.get('/', (req, res) => {
  res.json({ mensaje: 'Servidor funcionando!' });
});

//Ruta para obtener todos los usuarios
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// GET - obtener uno por id
app.get('/usuarios/:id', (req, res) => {
  const user = usuarios.find(u => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
  res.json(user);
});

app.post('/usuarios', (req, res) => {
  console.log("BODY RECIBIDO:", req.body);

  const nuevo = {
    id: usuarios.length + 1,
    nombre: req.body.nombre
  };
  usuarios.push(nuevo);
  res.status(201).json(nuevo);
});


// DELETE - borrar usuario
app.delete('/usuarios/:id', (req, res) => {
  usuarios = usuarios.filter(u => u.id !== Number(req.params.id));
  res.json({ mensaje: 'Usuario eliminado' });
});


// Levantar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
