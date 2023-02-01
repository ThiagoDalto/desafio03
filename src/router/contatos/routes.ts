import { Router } from "express";
import ensureAuthMiddleware from "../../middlewares/ensureAuth.middleware"

import contatosCreateController from "../../controllers/contatos/contatosCreate.controller";
import contatosListConttroller from "../../controllers/contatos/contatosList.controller";
import contatoSoftDeleteController from "../../controllers/contatos/contatosSoftDelete.controller";
import contatosUpdateController from "../../controllers/contatos/contatosUpdate.controller";


const contatoRoutes = Router();

contatoRoutes.post("", ensureAuthMiddleware, contatosCreateController)
contatoRoutes.get("", ensureAuthMiddleware, contatosListConttroller)
contatoRoutes.delete("/:id", ensureAuthMiddleware, contatoSoftDeleteController)
contatoRoutes.patch("/:id", ensureAuthMiddleware, contatosUpdateController)


export default contatoRoutes;