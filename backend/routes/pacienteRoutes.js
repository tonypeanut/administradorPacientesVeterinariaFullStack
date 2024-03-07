import express from "express";
import checkAuth from "../middleware/authMiddleware.js";
import { agregarPaciente, obtenerPacientes } from '../controllers/pacienteController.js'

const router = express.Router();

router.route('/').post(checkAuth, agregarPaciente).get(obtenerPacientes)

export default router;