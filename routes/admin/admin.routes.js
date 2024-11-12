import { Router } from "express"

import turfRouter from "./turf.routes.js"
import userManagementRouter from "./userManagement.routes.js"
import ownerManagementRouter from "./ownerManagement.routes.js"
import verifyAdminToken from "../../middleware/jwt/admin.middleware.js"

const adminRouter = Router()

adminRouter.use("/users", verifyAdminToken, userManagementRouter);
adminRouter.use("/owners", verifyAdminToken, ownerManagementRouter);
adminRouter.use("/turfs", verifyAdminToken, turfRouter);

export default adminRouter;