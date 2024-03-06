import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import router from "./routes/veterinarioRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

app.use("/api/veterinarios", router);

const PORT = process.env.PORT || 4000;

app.listen(4000, ()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`)
})