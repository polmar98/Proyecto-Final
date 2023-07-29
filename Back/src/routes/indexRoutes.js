const {Router} = require('express');
const handlersPackages = require('../handlers/packagesHandlers');
const handlersTypePackages = require('../handlers/typePackagesHandlers');
const handlersAirlines = require('../handlers/airlinesHandlers');
const handlerUser = require('../handlers/usersHandlers');
const handlerComment = require('../handlers/commentHandlers');
const handlersContinents = require("../handlers/continentsHandlers");
const handlersCountries = require("../handlers/countriesHandlers");
const handlersCities = require("../handlers/citiesHandlers");
const handlersActivity = require("../handlers/activityHandlers");
const handlersHotels = require("../handlers/hotelHandlers");
const handlersAdmins = require("../handlers/adminHandlers");
const handlersCityOrigins = require("../handlers/cityOriginsHandlers");
const handlersShoppingCar = require('../handlers/shoppingCarHandlers');
const handlersActivityComment = require('../handlers/activityCommentHandlers');
const handlersPayment = require("../handlers/paymentHandlers");

const router = Router();

router.use('/packages', handlersPackages);
router.use('/typePackages', handlersTypePackages);
router.use('/airlines', handlersAirlines);
router.use('/users', handlerUser);
router.use('/admins', handlersAdmins);
router.use('/comments', handlerComment)
router.use("/continents", handlersContinents);
router.use("/countries", handlersCountries);
router.use("/cities", handlersCities);
router.use("/cities-origins", handlersCityOrigins);
router.use("/activity", handlersActivity);
router.use("/hotels", handlersHotels);
router.use('/shoppingCar', handlersShoppingCar);
router.use('/activityComments', handlersActivityComment);
router.use("/payment", handlersPayment);




module.exports = router;