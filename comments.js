// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Import models
const Comment = require('../models/comment');
const User = require('../models/user');
const Post = require('../models/post');

// Import middleware
const checkAuth = require('../middleware/check-auth');

// Import controllers
const CommentsController = require('../controllers/comments');

// Handle incoming GET requests to /comments
router.get('/', CommentsController.comments_get_all);

// Handle incoming POST requests to /comments
router.post('/', checkAuth, CommentsController.comments_create_comment);

// Handle incoming GET requests to /comments/:commentId
router.get('/:commentId', CommentsController.comments_get_comment);

// Handle incoming PATCH requests to /comments/:commentId
router.patch('/:commentId', checkAuth, CommentsController.comments_update_comment);

// Handle incoming DELETE requests to /comments/:commentId

router.delete('/:commentId', checkAuth, CommentsController.comments_delete_comment);

module.exports = router;



