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
    const { id } = req.params;
    await services.patchOrders(id, order);
    res.send(order);
};

export default {
    getOrders,
    postOrders,
    patchOrders
}