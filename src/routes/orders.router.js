import express from "express";
import ordersControllers from "../controllers/orders.controllers.js";

const router = express.Router();

router.get("/", ordersControllers.getOrders)
router.post("/", ordersControllers.postOrders)
router.patch("/:id", ordersControllers.patchOrders)



export default {
    router
}