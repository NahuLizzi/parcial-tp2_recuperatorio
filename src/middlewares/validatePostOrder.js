export const validatePostOrder = (req, res, next) => {
    const { client, price } = req.body;

    if (!client || !price) {
        return res.status(400).json({ error: "Faltan campos obligatorios." });
    }
    next();
};