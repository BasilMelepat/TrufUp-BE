import e from "express";
import { getAllTurfs } from "../../controllers/admin/turf.controller.js";
import verifyAdminToken from "../../middleware/jwt/admin.middleware.js";

const router = e.Router();

router.get("/all", verifyAdminToken,getAllTurfs);

export { router as turfRouter }