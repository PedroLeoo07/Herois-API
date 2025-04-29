require ('dotenv').config();

const apiKeyMiddleware = (req, res, next) => {
    const clientKey = req.headers['x-api-key'];
    const serverKey = process.env.API_KEY;

    if (!clientKey) {
        return res.status(401).json({ message: 'Chave Da Api Não fornecida' });
    }

    if (clientKey !== serverKey) {
        return res.status(403).json({ message: 'Chave Da Api inválida' });
    }
    next();
}

module.exports = apiKeyMiddleware;