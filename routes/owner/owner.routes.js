import e from "express";
import {authRouter} from "./auth.routes.js"
import {turfRouter} from "./turf.routes.js"
import {reviewsRouter} from "./reviews.routes.js"
import {bookingsRouter} from "./bookings.routes.js"
import {dashboardRouter} from "./dashboard.routes.js"

const router= e.Router();

router.use("/auth",authRouter);
router.use("/turf",turfRouter);
router.use("/reviews",reviewsRouter);
router.use("/bookings",bookingsRouter);
router.use("/dashboard", dashboardRouter)

export {router as ownerRouter}