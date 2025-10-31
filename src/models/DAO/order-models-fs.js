import fs from "fs";

const readFile = async () => {
    const files= await fs.promises.readFile("fs-save.json", "utf-8");
    return JSON.parse(files);
}

const getOrders = async ()=> {
    return await readFile();
};

const postOrders = async (order) =>{
    const orders = await readFile();
    order.id = orders.length ? orders[orders.length - 1].id + 1 : 1;
    orders.push(order);
    fs.promises.writeFile("fs-save.json",JSON.stringify(orders, null, 2), "utf-8");
    return orders
}

const patchOrders = async (id, order) =>{
    const orders = await readFile();
    const index = orders.findIndex((e) => e.id == id);
    if (index == -1){
        return "ERROR. No se encuentra el ID ingresado.";
    } else{
        const patch = {...orders[index], ...order};
        orders.splice(index, 1, patch);
        await fs.promises.writeFile("fs-save.json",JSON.stringify(orders, null, 2), "utf-8");
        return order;
    }
};

export default{
    getOrders,
    postOrders,
    patchOrders
};
