const { Router } = require("express");
const ReportsController = require("../controllers/reports.controller");
const Authcontroller= require("../controllers/authe.controller")

const routes = Router();

routes.post("/Auth/register", Authcontroller.register);
routes.post("/Auth/login", Authcontroller.login);

routes.post("/reports/create", ReportsController.create);
routes.get("/reports/list", ReportsController.list);

