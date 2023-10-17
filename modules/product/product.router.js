const Router = require("express");
const {getEventsController, createEventController} = require("./product.controller")
const eventsRouter = Router();
eventsRouter.get("/getproduct", getEventsController);
eventsRouter.post("/postproduct", createEventController);
module.exports = { eventsRouter }