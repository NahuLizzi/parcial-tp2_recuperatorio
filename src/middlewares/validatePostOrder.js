export const validatePostOrder = (req, res, next) => {
    const { customer, totalPrice } = req.body;

    if (!customer || !totalPrice) {
        return res.status(400).json({ error: "Faltan campos obligatorios." });
    }
    next();
};