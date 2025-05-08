const heroiModel = require('../models/heroiModel.js');

const getAllHerois = async (req, res) => {
  try {
    const herois = await heroiModel.getAllHerois();
    res.json(herois);
  } catch (error) {
    console.error('Erro ao buscar os Herois:', error);
    res.status(500).json({ error: 'Erro ao buscar Herois.' });
  }
}

const getHeroiById = async (req, res) => {
  try {
    const heroi = await heroiModel.getHeroiById(req.params.id);
    if (!heroi) {
      return res.status(404).json({ error: 'heroi não encontrado.' });
    }
    res.json(heroi);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar heroi.' });
  }
}

const createHeroi = async (req, res) => {
  try {
    const { name, poder, photo } = req.body;
    const newHeroi = await heroiModel.createHeroi(name, poder, photo);
    res.status(201).json(newHeroi);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar Heroi.' });
  }
}

const updateHeroi = async (req, res) => {
  try {
    const { name, poder } = req.body;
    const heroi = await heroiModel.updateHeroi(req.params.id, name, poder);
    if (!heroi) {
      return res.status(404).json({ error: 'heroi não encontrado.' });
    }
    res.json(heroi);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao editar Heroi.' });
  }
}

const deleteHeroi = async (req, res) => {
  try {
    const result = await heroiModel.deleteHeroi(req.params.id);
    if (result.error) {
      return res.status(404).json(result);
    }
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar Heroi.' });
  }
}

module.exports = { getAllHerois, getHeroiById, createHeroi, updateHeroi, deleteHeroi };