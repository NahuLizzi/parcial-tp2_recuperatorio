//import middlewares from "../middlewares/orderValidation.js";
import services from "../services/orders.services.js";

const getOrders = async (req, res) => {
    const orders = await services.getOrders();
    res.send(orders);
};

const postOrders = async (req, res) => {
    const order = req.body;
    await services.postOrders(order);
    res.send(order);
};

const patchOrders = async (req, res) => {
    const order = req.body;
    const orderId = req.params.id;
    await services.patchOrders(orderId, order);
    res.send(order);
};

export default {
    getOrders,
    postOrders,
    patchOrders
}