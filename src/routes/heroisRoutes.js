const express = require('express');
const router = express.Router();
const heroiController = require('../controllers/heroiController.js');
const upload = require('../config/upload.js');
const apiKeyMiddleware = require('../config/apiKey.js');

router.use(apiKeyMiddleware);

router.get('/', heroiController.getAllHerois);
router.get('/:id', heroiController.getHeroiById);
router.post('/', upload.single('photo'), heroiController.createHeroi);
router.put('/:id', heroiController.updateHeroi);
router.delete('/:id', heroiController.deleteHeroi);

module.exports = router;