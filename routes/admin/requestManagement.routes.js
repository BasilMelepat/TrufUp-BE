import e from "express";
import {
  getAllRequestedOwners,
  approveOwnerRequest,
  deleteOwnerRequest,
  reconsiderOwnerRequest,
} from "../../controllers/admin/requestManagement.controller.js";

const router = e.Router();

router.get("/list",getAllRequestedOwners);
router.put("/:id/accept",approveOwnerRequest);
router.delete("/:id",deleteOwnerRequest);
router.put("/reconsider/:id",reconsiderOwnerRequest);

export { router as ownerRequestRouter };