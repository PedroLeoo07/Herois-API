const editoraModels = require('../models/editoraModels');

const getAllEditoras = async (req, res) => {
    try {
        const editoras = await editoraModel.getAllEditoras();
        res.status(200).json({ message: "Todos os editores abaixo!!", editoras });
    } catch (error) {
        res.status(404).json({ message: "Erro ao buscar os editores" });
    }
};

const getEditorById = async (req, res) => {
    try {
        const editor = await editorModels.getEditorById(req.params.id);
        if (!editor) {
            res.status(404).json({ message: "Editor não encontrado" });
        } else {
            res.status(200).json({ message: "Editor encontrado com sucesso", editor });
        }
    } catch (error) {
        res.status(400).json({ message: "Erro ao buscar o editor" });
    }
};

const createEditor = async (req, res) => {
    try {
        const { nome, sexo, idade, photo } = req.body;
        const newEditor = await editorModels.createEditor(nome, sexo, idade, photo);
        res.status(201).json({ message: "Editor criado com sucesso", newEditor });
    } catch (error) {
        res.status(400).json({ message: "Erro ao criar o editor" });
    }
};

const updateEditor = async (req, res) => {
    try {
        const { nome, sexo, idade } = req.body;
        const updatedEditor = await editorModels.updateEditor(req.params.id, nome, sexo, idade);
        if (!updatedEditor) {
            res.status(404).json({ message: "Editor não encontrado para atualização" });
        } else {
            res.status(200).json({ message: "Editor atualizado com sucesso", updatedEditor });
        }
    } catch (error) {
        res.status(400).json({ message: "Erro ao atualizar o editor" });
    }
};

const deleteEditor = async (req, res) => {
    try {
        const deletedEditor = await editorModels.deleteEditor(req.params.id);
        if (deletedEditor.error) {
            res.status(404).json({ message: deletedEditor.error });
        } else {
            res.status(200).json(deletedEditor);
        }
    } catch (error) {
        res.status(400).json({ message: "Erro ao excluir o editor" });
    }
};

module.exports = { getAllEditoras, getEditorById, createEditor, updateEditor, deleteEditor };