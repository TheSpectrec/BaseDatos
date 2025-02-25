const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const personaRoutes = require('./routes/persona.routes');
const productoRoutes = require('./routes/producto.routes');
const asignacionProductoRoutes = require('./routes/asignacionProducto.routes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/api/asignaciones', asignacionProductoRoutes);
app.use('/api/personas', personaRoutes);
app.use('/api/productos', productoRoutes);

// Conexión a la base de datos
mongoose.connect('mongodb+srv://20233tn111:azB3acGGi0wRLh7p@practica.m6rej.mongodb.net/inventario-db?retryWrites=true&w=majority&appName=Practica', {useNewUrlParser: true, useUnifiedTopology: true}).then(() =>{
    console.log('Conexión exitosa a la base de datos a MongoDB');
    app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
    })
    .catch((err) => console.log('Error al conectar en MongoDB', err));

//---------------------------------------------


