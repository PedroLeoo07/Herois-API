const express = require("express");
const router = express.Router();
const heroiController = require("../controller/heroiController");

// Rota para obter todos os heróis ou filtrar por descrição
router.get("/herois", heroiController.getHerois);

// Rota para obter um herói específico por ID
router.get("/herois/:id", heroiController.getHeroisById);

// Rota para criar um novo herói
router.post("/herois", heroiController.createHeroi);

// Rota para atualizar um herói existente
router.put("/herois/:id", heroiController.updateHeroi);

// Rota para deletar um herói
router.delete("/herois/:id", heroiController.deleteHeroi);