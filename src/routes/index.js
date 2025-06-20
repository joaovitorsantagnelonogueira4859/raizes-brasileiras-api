const { Router } = require("express");
const AuthController = require("../controllers/auth.controller");
const ReportsController = require("../controllers/reports.controller");

const routes = Router();

routes.post("/auth/register", AuthController.register);
routes.post("/auth/login", AuthController.login);

routes.post("/reports/create", ReportsController.create);
routes.get("/reports/list", ReportsController.list);

module.exports = routes;
