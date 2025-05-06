const express = require("express");
const router = express.Router();
const timeController = require("../controllers/timeController");
const apiKeyMiddleware = require("../config/apiKey");


router.use(apiKeyMiddleware);
// Middleware para verificar a chave da API em todas as rotas
router.get("/", timeController.getAllTimes);
router.get("/:id", timeController.getTimeById);
router.post("/", timeController.createTime);
router.put("/:id", timeController.updateTime);
router.delete("/:id", timeController.deleteTime);

module.exports = router;