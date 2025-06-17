const { Router } = require("express");
const AuthController = require("../controllers/auth.controller");

const routes = Router();

// auth
routes.post("/auth/register", AuthControllerController.register);
routes.post("/auth/login", AuthController.login);
// reports
routes.post("reports/")

module.exports = routes;

