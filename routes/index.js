import e from "express";
import {userRouter} from "./user/user.routes.js";
import {ownerRouter} from "./owner/owner.routes.js";
import {adminRouter} from "./admin/admin.routes.js";

const router  = e.Router()

router.use("/user", userRouter);
router.use("/owner", ownerRouter)
router.use("/admin", adminRouter)

export { router as apiRouter }