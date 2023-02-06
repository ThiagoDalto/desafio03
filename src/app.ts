import "reflect-metadata";
import "express-async-errors";
import express from "express";
import clienteRoutes from "./router/cliente/routes";
import sessionRoute from "./router/session/routes";
import contatoRoutes from "./router/contatos/routes";
import handleErrorMiddleware from "./middlewares/handleError.middleware";



const app = express();


app.use(express.json());
app.use("/clientes", clienteRoutes);
app.use("/login", sessionRoute);
app.use("/contatos", contatoRoutes);
app.use(handleErrorMiddleware);


export default app;