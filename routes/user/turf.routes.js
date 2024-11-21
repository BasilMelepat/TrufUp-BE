import e from "express";
import { getAllTurfs,getTurfById,getTimeSlotByTurfId } from "../../controllers/user/turf.controller.js";

const router= e.Router();

// get all turfs
router.get("/all", getAllTurfs);
// get single turf by id
router.get("/details/:id", getTurfById);
// get time slots by turf id pass with query
router.get("/timeSlot", getTimeSlotByTurfId);
// update time slots by turf id pass with query

export {router as turfRouter}