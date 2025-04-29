const express = require('express');
const router = express.Router();
const reportController = require("../controller/reportController");
const apiKeyMiddleware = require("../config/apiKey");

router.use(apiKeyMiddleware);

//Rota para gerar o relatório em PDF
/**
 * @swagger
 * /report/pdf:
 *   get:
 *     summary: Gerar relatório em PDF
 *     tags:
 *       - Report
 *     responses:
 *       200:
 *         description: Relatório gerado com sucesso
 *       500:
 *         description: Erro ao gerar o relatório
 */
router.get("/report/pdf", reportController.exportHeroiPDF);

/**
 * @swagger
 * /report/editors/pdf:
 *   get:
 *     summary: Gerar relatório de editores em PDF
 *     tags:
 *       - Report
 *     responses:
 *       200:
 *         description: Relatório de editores gerado com sucesso
 *       500:
 *         description: Erro ao gerar o relatório de editores
 */
router.get("/report/editors/pdf", reportController.exportEditorsPDF);

module.exports = router;