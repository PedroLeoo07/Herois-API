const editorModels = require("../models/editorModels");

const getAllEditors = async (req, res) => {
    try {
        const editors = await editorModels.getEditors();
        res.status(201).json({ message: "Todos os editores abaixo!!", editors})
    } catch (error) {
      res.status(404).json({ message: "Erro ao buscar os editores"});  
    }
};

const getEditor = async (req, res) => {
    try {
        const editor = await editorModels.getEditor(req.query);
        if (!editor) {
            res.status(404).json({ message: "Editor não encontrado" });
        } else {
            res.status(200).json({ message: "Editor encontrado com sucesso", editor });
        }
    } catch (error) {
        res.status(400).json({ message: "Erro ao buscar o editor" });
    }
};

const getEditorById = async (req, res) => {
    try {
        const editor = await editorModels.getEditorById(req.params.id);
        if (!editor) {
            res.status(404).json({ message: "Editor não encontrado"});
        }
        res.status(201).json({ message: "Editor encontrado com sucesso"})
    } catch (error) {

    }
};

const createEditor = async (req, res) => {
    try {
        const newEditor = await editorModels.createEditor(req.body);
        res.status(201).json({ message: "Editor criado com sucesso", newEditor });
    } catch (error) {
        res.status(400).json({ message: "Erro ao criar o editor" });
    }
};

const updateEditor = async (req, res) => {
    try {
        const updatedEditor = await editorModels.updateEditor(req.params.id, req.body);
        if (!updatedEditor) {
            res.status(404).json({ message: "Editor não encontrado para atualização" });
        }
        res.status(200).json({ message: "Editor atualizado com sucesso", updatedEditor });
    } catch (error) {
        res.status(400).json({ message: "Erro ao atualizar o editor" });
    }
};

const deleteEditor = async (req, res) => {
    try {
        const deletedEditor = await editorModels.deleteEditor(req.params.id);
        if (!deletedEditor) {
            res.status(404).json({ message: "Editor não encontrado para exclusão" });
        }
        res.status(200).json({ message: "Editor excluído com sucesso" });
    } catch (error) {
        res.status(400).json({ message: "Erro ao excluir o editor" });
    }
};

module.exports = { getAllEditors, getEditor, getEditorById, createEditor, updateEditor, deleteEditor }