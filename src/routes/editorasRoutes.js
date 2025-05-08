const express = require('express');
const router = express.Router();
const editoraController = require('../controllers/editoraController.js');
const upload = require('../config/upload.js');
const apiKeyMiddleware = require('../config/apiKey.js');

router.use(apiKeyMiddleware);

router.get('/', editoraController.getAllEditoras);
router.get('/:id', editoraController.getEditora);
router.post('/', upload.single('photo'), editoraController.createEditora);
router.put('/:id', editoraController.updateEditora);
router.delete('/:id', editoraController.deleteEditora);

module.exports = router;