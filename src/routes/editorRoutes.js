const express = require("express");
const router = express.Router();
const editorController = require("../controller/editorController");
const upload = require("../config/upload");
const apiKeyMiddleware = require("../config/apiKey");

router.use(apiKeyMiddleware)

// Rota para obter todos os heróis ou filtrar por descrição
router.get("/editors", editorController.getEditor);

// Rota para obter um herói específico por ID
router.get("/editors/:id", editorController.getEditorById);

// Rota para criar um novo herói
router.post("/editors", upload.single("photo", editorController.createEditor))

// Rota para atualizar um herói existente
router.put("/editors/:id", editorController.updateEditor);

// Rota para deletar um herói
router.delete("/editors/:id", editorController.deleteEditor);

