const express = require('express')
const router = express.Router();
const PostController = require('../controllers/PostController');

//route
router.get('/posts', PostController.findPosts);

//export router
module.exports = router