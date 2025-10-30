const orders = [
    {id: 1, 
customer: "Juan Carlos Perez", 
items: [
    {name: "GoPro", quantity: 1}, 
    {name: "Mouse", quantity: 1}
], 
totalPrice: 786000 }
];

const getOrders = async ()=> {
    return await orders;
};

const postOrders = async (order) =>{
    const ordersData = await orders;
    order.id = ordersData.length ? ordersData[ordersData.length-1].id + 1 : 1;
    ordersData.push(order);
    return await order;
}

const patchOrders = async (id, order) =>{
    const ordersData = await orders;
    const index = ordersData.findIndex((e) => e.id == id);
    if (index == -1){
        return "ERROR. No se encuentra el ID ingresado.";
    } else{
        const patch = {...ordersData[index], order};
        ordersData.splice(index, 1, patch);
        return await order;
    }
};


export default{
    getOrders,
    postOrders,
    patchOrders
};
