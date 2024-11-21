import e from "express";
import { getAllOwners, getTurfByOwnerId } from "../../controllers/admin/ownerManagement.controller.js";

const router = e.Router()

router.get("/list", getAllOwners);
router.get("/:id/turf", getTurfByOwnerId);

export { router as ownerManagementRouter }