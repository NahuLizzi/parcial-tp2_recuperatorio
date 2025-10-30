import Factory from "../models/DAO/factory.js";

const ordersModels = await Factory("MEM");

const getOrders = async ()=> {
    return await ordersModels.getOrders();
};

const postOrders = async (order) =>{
    ordersModels.postOrders(order);
    return order;
}

const patchOrders = async (id, order) =>{
    ordersModels.patchOrders(id, order);
    return order;
}


export default{
    getOrders,
    postOrders,
    patchOrders
};