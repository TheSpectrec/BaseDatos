// Importar dependencias
const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');

// Inicializar Express
const app = express();
const PORT = 3001;
app.use(bodyParser.json());

// Rutas CRUD
app.post('/users', userController.createUser);
app.get('/users', userController.getAllUsers);
app.get('/users/:id', userController.getUserById);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});