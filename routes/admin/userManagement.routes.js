import e from "express";
import {getAllUsers} from "../../controllers/admin/userManagement.controller.js"
import verifyAdminToken from "../../middleware/jwt/admin.middleware.js";

const router = e.Router();

router.get("/all", getAllUsers);

export { router as userManagementRouter}