import express from "express";
import ordersControllers from "../controllers/orders.controllers.js";
import { validatePostOrder } from "../middlewares/validatePostOrder.js";
import { validatePatchOrder } from "../middlewares/validatePatchOrder.js";

const router = express.Router();

router.get("/", ordersControllers.getOrders)
router.post("/", validatePostOrder, ordersControllers.postOrders)
router.patch("/:id", validatePatchOrder, ordersControllers.patchOrders)



export default {
    router
}