const express = require("express");
const router = express.Router();
const heroiController = require("../controller/heroiController");
const upload = require("../config/upload");
const apiKeyMiddleware = require("../config/apiKey");

router.use(apiKeyMiddleware);

// Rota para obter todos os heróis ou filtrar por descrição
router.get("/herois", heroiController.getAllHerois);

// Rota para obter um herói específico por ID
//router.get("/herois/:id", heroiController.getHeroisById);

// Rota para criar um novo herói
router.post("/herois", upload.single("photo", heroiController.createHeroi));

// Rota para atualizar um herói existente
router.put("/herois/:id", heroiController.updateHeroi);

// Rota para deletar um herói
router.delete("/herois/:id", heroiController.deleteHeroi);

module.exports = router;
