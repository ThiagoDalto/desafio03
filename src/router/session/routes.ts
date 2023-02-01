import { Router } from "express";
import clienteLoginCreateController from "../../controllers/session/clienteLoginCreate.controller";

const sessionRoute = Router();

sessionRoute.post("", clienteLoginCreateController);

export default sessionRoute;