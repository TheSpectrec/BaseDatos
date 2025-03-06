const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.routes");
const houseRoutes = require("./routes/house.routes");
const visitRoutes = require("./routes/visit.routes");
const visitTypeRoutes = require("./routes/visitType.routes");
const roleRoutes = require("./routes/role.routes");
const authenticationRoutes = require("./routes/authentication.routes");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());


// Rutas
app.use("/auth", authenticationRoutes);
app.use("/users", userRoutes);
app.use("/houses", houseRoutes);
app.use("/visits", visitRoutes);
app.use("/visit-types", visitTypeRoutes);
app.use("/roles", roleRoutes);

// Conexión a la base de datos
mongoose.connect('mongodb+srv://20233tn111:azB3acGGi0wRLh7p@practica.m6rej.mongodb.net/inventario-db?retryWrites=true&w=majority&appName=Practica', {useNewUrlParser: true, useUnifiedTopology: true}).then(() =>{
    console.log('Conexión exitosa a la base de datos a MongoDB');
    app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
    })
    .catch((err) => console.log('Error al conectar en MongoDB', err));

//---------------------------------------------