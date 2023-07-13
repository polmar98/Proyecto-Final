const {Router} = require('express');
const handlersPackages = require('../handlers/packages.handlers')

const router = Router();

router.use('/packages', handlersPackages);

module.exports = router;