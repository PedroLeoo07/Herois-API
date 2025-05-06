const express = require("express");
const router = express.Router();
const jogadorController = require("../controllers/jogadorController");
const upload = require("./../config/upload");
const apiKeyMiddleware = require("../config/apiKey");

router.use(apiKeyMiddleware);

router.get("/", jogadorController.getAllJogadores);
router.get("/:id", jogadorController.getJogador);
router.post("/", upload.single("photo"), jogadorController.createJogador);
router.delete("/:id", jogadorController.deleteJogador);
router.put("/:id", jogadorController.updateJogador);

module.exports = router;