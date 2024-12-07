import e from "express";
import { registerOwner,loginOwner,ownerRequest } from "../../controllers/owner/auth.controller.js";
import { validateRegisterInput,validateLoginInput,validateOwnerRequestInput } from "../../middleware/validators/owner/authValidator.js";

const router= e.Router();

router.post("/register",validateRegisterInput,  registerOwner);
router.post("/login",validateLoginInput, loginOwner);
router.post("/ownerRequest",validateOwnerRequestInput, ownerRequest);

export {router as authRouter};