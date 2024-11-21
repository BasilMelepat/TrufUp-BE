import e from "express";
import verifyOwnerToken from "../../middleware/jwt/owner.middleware.js";

import { getTurfsWithReviews } from "../../controllers/owner/review.controller.js";

const router= e.Router();

router.get("/turfs-with-reviews", verifyOwnerToken, getTurfsWithReviews);

export {router as reviewsRouter};