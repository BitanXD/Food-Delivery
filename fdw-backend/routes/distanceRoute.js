import express from "express"
import { updateDistanceCharge } from "../controllers/orderController.js"

const distanceRouter = express.Router();

distanceRouter.post("/calculateDistance", updateDistanceCharge)

export default distanceRouter;