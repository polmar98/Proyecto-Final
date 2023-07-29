const { Router } = require("express");
const {
    generateItinerary
} = require("../controllers/itineraryController");

const router = Router();

router.post('/',generateItinerary)


module.exports = router;