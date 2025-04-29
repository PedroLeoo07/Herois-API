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

const createHeroi = async (req, res) => {
    try {
        const { nome, poder} = req.body;
        const photo = req.file ? req.file.path : null;

        console.log("Arquivo recebido:", req.file);

        const newHeroi = await postModels.createHeroi(nome, poder, photo);
    res.status(201).json({ message: "Heroi criado com sucesso", newHeroi });
    } catch (error) {
        console.error("Erro ao criar heroi:", error);
        res.status(500).json({ message: "Erro ao criar o heroi", error });
    }
};


module.exports = { getAllHerois, getHeroi };