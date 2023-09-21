const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');

// post route
router.post('/articles', articleController.createArticle);

// Get route
router.get('/articles', articleController.getAllArticles);

// update route
router.put('/articles/:id', articleController.editArticle);

// Delete route
router.delete('/articles/:id', articleController.deleteArticle);

// Search route
router.get('/articles/:title', articleController.searchArticlesByTitle);

module.exports = router;
