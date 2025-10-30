import orderModelServer from "./order-models-server.js";
import orderModelFS from "./order-models-fs.js";


const Factory = async (type) =>{
    switch (type){
        case "MEM":
            return await orderModelServer;
        case "FS":
            return await orderModelFS;
        default:
            return await orderModelServer; 
        
    }
};

export default Factory