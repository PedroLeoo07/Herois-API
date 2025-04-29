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

const getHeroi = async (req, res) => {
    try {
        const heroi = await heroiModels.getHeroiById(req.params.id);
        if (!heroi) {
            return res.status(404).json({ message: "Heroi não encontrado" });
        }
        res.status(200).json({ message: "Heroi encontrado", heroi });
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar o heroi", error });
    }
};


module.exports = { getAllHerois, getHeroi };