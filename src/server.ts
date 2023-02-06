import app from "./app";
import AppDataSource from "./data-source";
import "dotenv/config";

const express = require("express")

const cors = require("cors")
app.use(cors({
    origin: "*",
}));

(async () => {
    await AppDataSource.initialize().catch((err) => {
        console.error("Error during Data Source initialization", err);
    });

    app.listen( process.env.PORT || 3000, () => {
        console.log("Servidor executando");
    });
})();