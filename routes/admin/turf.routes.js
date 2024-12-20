import e from "express";
import { 
    getAllTurfs,
    adminTurfRegister,
    adminEditTurfById,
    adminDeleteTurfById } from "../../controllers/admin/turf.controller.js";
import verifyAdminToken from "../../middleware/jwt/admin.middleware.js";
import upload from "../../middleware/uploads/upload.middleware.js";

const router = e.Router();

router.get("/all", verifyAdminToken, getAllTurfs);
router.post("/register",verifyAdminToken,upload.single("image"), adminTurfRegister);
router.put("/:id", verifyAdminToken, adminEditTurfById);
router.delete('/delete/:id', verifyAdminToken, adminDeleteTurfById);

export { router as turfRouter }