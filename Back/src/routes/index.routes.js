const {Router} = require('express');
const handlersPackages = require('../handlers/packages.handlers');
const handlersTypePackages = require('../handlers/typePackages.handlers');
const handlersAirlines = require('../handlers/airlines.handlers');
const handlersContinents = require("../handlers/continents.handlers");
const handlersCountries = require("../handlers/countries.handlers");
const handlersCities = require("../handlers/cities.handlers");


const router = Router();

router.use('/packages', handlersPackages);
router.use('/typePackages', handlersTypePackages);
router.use('/airlines', handlersAirlines);
router.use("/continents", handlersContinents);
router.use("/continents/name?=", handlersContinents);
router.use("/countries", handlersCountries);
router.use("/cities", handlersCities);

module.exports = router;