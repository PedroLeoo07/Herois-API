const heroiModels = require('../models/heroiModel');

const getAllHerois = async (req, res) => {
    try {
        const {description} = req.query;
        const herois = await heroiModels.getHerois(description);
        res.status(200).json({ message: "Todos os herois abaixo!!", herois});
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar os herois", error });
    }
};

module.exports = { getAllHerois}