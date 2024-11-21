import e from "express";

import {turfRouter} from "./turf.routes.js"
import {dashboardRouter} from "./dashboard.routes.js";
import {transactionRouter} from "./transaction.routes.js"
import {userManagementRouter} from "./userManagement.routes.js"
import {ownerRequestRouter} from "./requestManagement.routes.js"
import {ownerManagementRouter} from "./ownerManagement.routes.js"
import verifyAdminToken from "../../middleware/jwt/admin.middleware.js"

const router = e.Router();

router.use("/owner-requests", verifyAdminToken, ownerRequestRouter);
router.use("/users", verifyAdminToken, userManagementRouter);
router.use("/owners", verifyAdminToken, ownerManagementRouter);
router.use("/turfs", verifyAdminToken, turfRouter);
router.use("/dashboard", verifyAdminToken, dashboardRouter);
router.use("/transactions", verifyAdminToken, transactionRouter);

export {router as adminRouter};