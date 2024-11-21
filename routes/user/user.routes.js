import e from "express";
import {authRouter} from "./auth.routes.js"
import {turfRouter} from "./turf.routes.js"
import {bookingRouter} from "./booking.routes.js"
import {reviewRouter} from "./review.routes.js"


const router= e.Router();

router.use("/auth", authRouter);
router.use("/turf", turfRouter);
router.use("/booking", bookingRouter);
router.use("/review", reviewRouter)

export {router as userRouter}