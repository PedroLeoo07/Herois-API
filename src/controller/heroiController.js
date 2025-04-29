const heroiModels = require('../models/heroiModels');

const getAllHerois = async (req, res) => {
    try {
        const { description } = req.query;
        const herois = await heroiModels.getHerois(description); // Certifique-se de que o modelo suporta o filtro
        res.status(200).json({ message: "Todos os herois abaixo!!", herois });
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar os herois" });
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
        res.status(500).json({ message: "Erro ao buscar o heroi" });
    }
};

const createHeroi = async (req, res) => {
    try {
        const { nome, poder } = req.body;
        const photo = req.file ? req.file.path : null;

        console.log("Arquivo recebido:", req.file);

        const newHeroi = await heroiModels.createHeroi(nome, poder, photo); // Corrigido para usar heroiModels
        res.status(201).json({ message: "Heroi criado com sucesso", newHeroi });
    } catch (error) {
        console.error("Erro ao criar heroi:", error);
        res.status(500).json({ message: "Erro ao criar o heroi" });
    }
};

const updateHeroi = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, poder } = req.body;
        const updatedHeroi = await heroiModels.updateHeroi(id, nome, poder);
        if (!updatedHeroi) {
            return res.status(404).json({ message: "Heroi não encontrado" });
        }
        res.status(200).json({ message: "Heroi atualizado com sucesso", updatedHeroi });
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar o heroi" });
    }
};

const deleteHeroi = async (req, res) => {
    try {
        const deletedHeroi = await heroiModels.deleteHeroi(req.params.id);
        if (!deletedHeroi) {
            return res.status(404).json({ message: "Heroi não encontrado" });
        }
        res.status(200).json({ message: "Heroi deletado com sucesso", deletedHeroi });
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar o heroi" });
    }
};

module.exports = { getAllHerois, getHeroi, createHeroi, updateHeroi, deleteHeroi };