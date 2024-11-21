import e from "express";
import { registerUser,loginUser, } from "../../controllers/user/auth.controller.js";
import { validateRegisterInput,validateLoginInput,} from "../../middleware/validators/user/authValidator.js";

const router= e.Router();

router.post("/register", validateRegisterInput, registerUser);
router.post("/login", validateLoginInput, loginUser);

export { router as authRouter };