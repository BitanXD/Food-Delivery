import express from "express"
import { calculateDistance } from "../controllers/orderController.js"

const distanceRouter = express.Router();

distanceRouter.post("/calculateDistance", calculateDistance)

export default distanceRouter;