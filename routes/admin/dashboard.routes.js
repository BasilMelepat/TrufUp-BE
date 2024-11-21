import e from "express";
import  getDashboard  from "../../controllers/admin/dashboard.controller.js";

const router = e.Router();

router.get("/", getDashboard);

export { router as dashboardRouter };