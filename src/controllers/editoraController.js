//Importando o modelo de jogador
const editoraModel = require('../models/editoraModel');

const getAllEditoras = async (req,res) => {
    try {
        const editoras = await editoraModel.getEditoras();
        res.status(200).json(editoras);
    } catch (error) {  
        res.status(404).json({message: "Erro ao buscar editoras"});   
    }
};

const getEditora = async (req,res) => {
    try {
        const jogador = await jogadorModel.getJogador(req.params.id);
        res.status(200).json(jogador);
    } catch (error) {
        res.status(404).json({message: "Erro ao buscar jogador"});
    }
};

const createEditora = async (req,res) => {
    try {
        const { name, nascimento, nacionalidade } = req.body;   
        const newEditora = await editoraModel.createEditora(name, nascimento, nacionalidade);
        res.status(201).json(newEditora);
    } catch (error) {
	 console.log(error);
        if (error.code === "23505") { // Código de erro do PostgreSQL para chave única violada
            return res.status(400).json({ message: "Editora já cadastrada." });
        }
        res.status(500).json({ message: "Erro ao criar editora." });
    }
};

const updateEditora = async (req, res) => {
    try {
        const { name, nascimento, nacionalidade } = req.body;
        const updatedEditora = await editoraModel.updateEditora(req.params.id, name, nascimento, nacionalidade);
        if (!updatedEditora) {
            return res.status(404).json({ message: "Editora não encontrada." });
        }
        res.json(updatedEditora);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar editora." });
    }
};

const deleteEditora = async (req, res) => {
    try {
        const message = await editoraModel.deleteEditora(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar editora." });
    }
};


module.exports = { getAllEditoras, getEditora, createEditora, updateEditora, deleteEditora };