const {Router} = require('express');
const {isAuth} = require('../middlewares/isAuth');
const router = Router();

const PoliticoController = require('./controller');
const controller = new PoliticoController();

router.post('/', isAuth, (req, res) => controller.create(req, res));

router.get('/', (req, res) => controller.list(req, res));
router.get('/:id', (req, res) => controller.getById(req, res));
router.get('/:id/historico', (req, res) => controller.getPoliticianHistory(req, res));

router.put('/:id', isAuth, (req, res) => controller.update(req, res));
router.delete('/:id', isAuth, (req, res) => controller.delete(req, res));

module.exports = router;