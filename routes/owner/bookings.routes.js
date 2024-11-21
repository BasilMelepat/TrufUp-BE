import e from "express";
import {getOwnerBookings} from "../../controllers/owner/booking.controller.js";
import verifyOwnerToken from "../../middleware/jwt/owner.middleware.js";

const router= e.Router();

router.get("/", verifyOwnerToken, getOwnerBookings);


export {router as bookingsRouter}