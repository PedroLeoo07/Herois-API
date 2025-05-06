const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController");

//Rota para gerar CSV
router.get("/report/csv", reportController.exportJogadorCSV);

//Rota para gerar PDF
router.get("/report/pdf", reportController.exportJogadorPDF);

module.exports = router;