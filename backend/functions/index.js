import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import { conectarDB } from "../config/db.js";
import routerVeterinario from "../routes/veterinarioRoutes.js";
import routerPacientes from "../routes/pacienteRoutes.js";
import serverless from 'serverless-http'

const router = express.Router();

const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

const dominiosPermitidos = [process.env.FRONTEND_URL];

const corsOptions = {
    origin: function(origin, callback){
        if(dominiosPermitidos.indexOf(origin) !== -1) {
            // El origen del request está permitido
            callback(null, true);
        } else {
            callback(new Error('No permitido por CORS'))
        }
    }
}

//app.use(cors(corsOptions));
app.use(cors());

app.use("/api/veterinarios", routerVeterinario);
app.use("/api/pacientes", routerPacientes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`)
})

app.use('/.netlify/functions/index', router)
export const handler = serverless(app);

