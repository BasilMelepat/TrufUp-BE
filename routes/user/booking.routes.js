import e from "express";
import {
  verifyPayment,
  createOrder,
  getBookings,
} from "../../controllers/user/booking.controller.js";
import verifyUserToken from "../../middleware/jwt/user.middleware.js";

const router= e.Router();

router.post("/create-order", verifyUserToken, createOrder);
router.post("/verify-payment", verifyUserToken, verifyPayment);
router.get("/get-bookings", verifyUserToken, getBookings);

export {router as bookingRouter};