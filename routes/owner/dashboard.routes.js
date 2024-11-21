import e from "express";
import { getDashboardData} from "../../controllers/owner/dashboard.controller.js"
import verifyOwnerToken from "../../middleware/jwt/owner.middleware.js";

const router = e.Router();

router.get("/", verifyOwnerToken, getDashboardData);

export { router as dashboardRouter}