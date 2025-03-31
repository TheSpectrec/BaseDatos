import express from "express";
import cors from "cors";
import { connectDB } from "./src/database.js";
import morgan from "morgan";
import houseRoutes from "./src/routes/house.routes.js";

connectDB(); //funcion para coneccion a la base de datos
const app = express();
app.set("port", 4000); //Habilitar puerto 4000

app.use(morgan("dev")); //registrar y analizar solicitudes y respuestas HTTP
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // todas las peticiones se combierten en Json
app.use(cors({ origin: "*" })); //resivir peticiones de cualquier lado

// Rutas
app.use("/api/houses", houseRoutes);
app.use("/uploads", express.static("uploads"));

app.listen(app.get("port"), () => { //Servidor escuchando 
    console.log(`Hola tu aplicacion esta escuchando por el puerto' ${app.get("port")}`);
  });
