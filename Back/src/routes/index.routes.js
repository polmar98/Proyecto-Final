import { Router } from 'express';
const { grabarPais, listarPaises, listarPaisById } = require ('../controllers/paises.controllers');
const router = Router();

router.post('/countries/add', grabarPais);
router.get('/paises', listarPaises);
router.get('/paises/:id', listarPaisById);
export default router;