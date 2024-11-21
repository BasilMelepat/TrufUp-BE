import e from "express";
 import {
  turfRegister,
  getTurfByOwner,
  editTurfById,
} from "../../controllers/owner/turf.controller.js";
import upload from "../../middleware/uploads/upload.middleware.js";
import verifyOwnerToken from "../../middleware/jwt/owner.middleware.js";

const router= e.Router();

router.post("/register",verifyOwnerToken,upload.single("image"),turfRegister);

router.get("/all", verifyOwnerToken, getTurfByOwner);
router.put("/:id", verifyOwnerToken,  editTurfById);


export {router as turfRouter}