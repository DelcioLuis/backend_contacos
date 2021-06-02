const express = require("express");


const UserController = require("./controllers/UserController");

const ContactController = require("./controllers/ConctController");

const routes = express.Router();




routes.post("/user", UserController.create)

routes.post("/contacto", ContactController.create)
routes.get("/contacto", ContactController.index)
routes.post("/tcontacto", ContactController.update)

routes.delete("/contacto:_id", ContactController.delete)


module.exports = routes;


