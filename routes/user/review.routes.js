import e from "express";
import {
  addReview,
  viewReviewsByTurf,
} from "../../controllers/user/review.controller.js";
import verifyUserToken from "../../middleware/jwt/user.middleware.js";

const router= e.Router();

router.post("/:id", verifyUserToken, addReview);
router.get("/:id", viewReviewsByTurf);

export {router as reviewRouter};