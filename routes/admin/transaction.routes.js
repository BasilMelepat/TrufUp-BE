import e from "express";      
import {getAllTransaction} from "../../controllers/admin/transaction.controller.js";

const router = e.Router();

router.get("/", getAllTransaction);

export { router as transactionRouter };