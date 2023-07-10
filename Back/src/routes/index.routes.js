import { Router } from 'express';
const { grabarPais, listarPaises, listarPaisById, grabacionMasiva } = require ('../controllers/paises.controllers');
const router = Router();

router.post('/countries/add', grabarPais);
router.post('/countries/masiva', grabacionMasiva);
router.get('/paises', listarPaises);
router.get('/paises/:id', listarPaisById);
export default router;