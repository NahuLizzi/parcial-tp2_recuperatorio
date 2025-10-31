import express from "express";
import orderRoutes from "./src/routes/orders.routes.js";

const app = express();
const PORT = 4200;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/orders", orderRoutes.router)

app.listen(PORT, ()=> {
    console.log("Server running...")
});