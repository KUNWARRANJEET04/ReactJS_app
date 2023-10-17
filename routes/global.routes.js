const Router = require("express");
const {eventsRouter} = require("../modules/product/product.router")
const globalRouter = Router();
globalRouter.use("/api/product/", eventsRouter);
module.exports = { globalRouter};