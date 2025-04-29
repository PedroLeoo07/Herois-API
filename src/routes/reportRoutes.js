const express = require('express');
const router = express.Router();

const reportController = require("../controllers/reportController");

router.get("/report/pdf", reportController.exportUsersPDF);
router.get("/report/posts/pdf", reportController.exportPostPDF);

module.exports = router;