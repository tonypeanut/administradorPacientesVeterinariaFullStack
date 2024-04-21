import express from "express";
import { registrar, perfil, confirmar, autenticar, olvidePassword, comprobarToken, nuevoPassword, actualizarPerfil, actualizarPassword, test } from '../controllers/veterinarioController.js'
import checkAuth from "../middleware/authMiddleware.js";

const routerVeterinario = express.Router();


// área pública
routerVeterinario.get("/test", test);
//routerVeterinario.post("/", registrar);
//routerVeterinario.get("/confirmar/:token", confirmar);
//routerVeterinario.post("/login", autenticar);
//routerVeterinario.post("/olvide-password", olvidePassword);
//routerVeterinario.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword);

// área privada
//routerVeterinario.get("/perfil", checkAuth, perfil);
//routerVeterinario.put("/perfil/:id", checkAuth, actualizarPerfil)
//routerVeterinario.put("/actualizar-password", checkAuth, actualizarPassword)

export default routerVeterinario;