const { Router } = require('express');
const { createComment } = require('../controllers/comment.controllers.js');
const router = Router();

router.post('/', createComment);

module.exports = router;