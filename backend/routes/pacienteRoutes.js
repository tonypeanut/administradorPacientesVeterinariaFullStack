import express from "express";
import checkAuth from "../middleware/authMiddleware.js";
import { agregarPaciente, obtenerPacientes, obtenerPaciente, actualizarPaciente, eliminarPaciente } from '../controllers/pacienteController.js'

const routerPacientes = express.Router();

routerPacientes.route('/').post(checkAuth, agregarPaciente).get(checkAuth, obtenerPacientes);
routerPacientes.route('/:id')
    .get(checkAuth, obtenerPaciente)
    .put(checkAuth, actualizarPaciente)
    .delete(checkAuth, eliminarPaciente)

export default routerPacientes;