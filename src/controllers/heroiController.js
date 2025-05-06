const timeModel = require('../models/timeModel');

const getAllTimes = async (req, res) => {
  try {
    const times = await timeModel.getAllTimes();
    res.json(times);
  } catch (error) {
    console.error('Erro ao buscar os times:', error);
    res.status(500).json({ error: 'Erro ao buscar times.' });
  }
}

const getTimeById = async (req, res) => {
  try {
    const time = await timeModel.getTimeById(req.params.id);
    if (!time) {
      return res.status(404).json({ error: 'Time não encontrado.' });
    }
    res.json(time);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar time.' });
  }
}

const createTime = async (req, res) => {
  try {
    const { name, logo } = req.body;
    const newTime = await timeModel.createTime(name, logo);
    res.status(201).json(newTime);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar time.' });
  }
}

const updateTime = async (req, res) => {
  try {
    const { name, logo, jogador_id } = req.body;
    const time = await timeModel.updateTime(req.params.id, name, logo, jogador_id);
    if (!time) {
      return res.status(404).json({ error: 'Time não encontrado.' });
    }
    res.json(time);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao editar time.' });
  }
}

const deleteTime = async (req, res) => {
  try {
    const result = await timeModel.deleteTime(req.params.id);
    if (result.error) {
      return res.status(404).json(result);
    }
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar time.' });
  }
}

module.exports = { getAllTimes, getTimeById, createTime, updateTime, deleteTime };