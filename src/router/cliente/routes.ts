import { Router } from "express";

import ensureAuthMiddleware from "../../middlewares/ensureAuth.middleware";

import clienteCreateController from "../../controllers/clientes/clientesCreate.controller";
import clienteListController from "../../controllers/clientes/clientesList.controller";
import clienteSoftDeleteController from "../../controllers/clientes/clientesSoftDelete.controller";
import clienteUpdateController from "../../controllers/clientes/clientesUpdate.controller";


const clienteRoutes = Router()

clienteRoutes.post("", clienteCreateController);
clienteRoutes.get("", ensureAuthMiddleware, clienteListController);
clienteRoutes.delete("/:id", ensureAuthMiddleware, clienteSoftDeleteController);
clienteRoutes.patch("/:id", ensureAuthMiddleware, clienteUpdateController);

export default clienteRoutes;