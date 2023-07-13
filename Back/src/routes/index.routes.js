const {Router} = require('express');
const router = Router();
const {getCities} = require('../controllers/cities.controllers');

router.get('/citys', getCities);
module.exports = router;