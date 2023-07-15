const {Router} = require('express');
const handlersPackages = require('../handlers/packages.handlers');
const handlersTypePackages = require('../handlers/typePackages.handlers');
const handlersAirlines = require('../handlers/airlines.handlers');
const handlerUser = require('../handlers/users.handlers');
const handlerComment = require('../handlers/comment.handlers');

const router = Router();

router.use('/packages', handlersPackages);
router.use('/typePackages', handlersTypePackages);
router.use('/airlines', handlersAirlines);
router.use('/users', handlerUser);
router.use('/comments', handlerComment)

module.exports = router;