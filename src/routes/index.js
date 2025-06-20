const { Router } = require("express");
const AuthController = require("../controllers/auth.controller");
const ReportsController = require("../controllers/reports.controller");

const routes = Router();


routes.post("/auth/register", AuthController.register);
routes.post("/auth/login", AuthController.login);

routes.post("/reports", ReportsController.list);
routes.get("/reports", ReportsController.create);

module.exports = routes;
