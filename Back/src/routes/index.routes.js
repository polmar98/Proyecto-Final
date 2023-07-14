const {Router} = require('express');
const handlersPackages = require('../handlers/packages.handlers');
const handlersTypePackages = require('../handlers/typePackages.handlers');
const handlersAirlines = require('../handlers/airlines.handlers');

const router = Router();

router.use('/packages', handlersPackages);
router.use('/typePackages', handlersTypePackages);
router.use('/airlines', handlersAirlines);

module.exports = router;