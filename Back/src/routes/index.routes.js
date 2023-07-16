const {Router} = require('express');
const handlersPackages = require('../handlers/packages.handlers');
const handlersTypePackages = require('../handlers/typePackages.handlers');
const handlersAirlines = require('../handlers/airlines.handlers');
const handlerUser = require('../handlers/users.handlers');
const handlerComment = require('../handlers/comment.handlers');
const handlersContinents = require("../handlers/continents.handlers");
const handlersCountries = require("../handlers/countries.handlers");
const handlersCities = require("../handlers/cities.handlers");
const handlersActivity = require("../handlers/activity.handlers");
const handlersHotels = require("../handlers/hotel.handlers");

const router = Router();

router.use('/packages', handlersPackages);
router.use('/typePackages', handlersTypePackages);
router.use('/airlines', handlersAirlines);
router.use('/users', handlerUser);
router.use('/comments', handlerComment)
router.use("/continents", handlersContinents);
router.use("/countries", handlersCountries);
router.use("/cities", handlersCities);
router.use("/activity", handlersActivity);
router.use("/hotels", handlersHotels);

module.exports = router;