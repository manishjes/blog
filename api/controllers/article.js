const Article = require('../models/articles');

// Controller for create article
const articleController = {
  createArticle: async (req, res) => {
    try {
      const article = await Article.create(req.body);
      res.status(201).json(article);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
// get all the Articles
  getAllArticles: async (req, res) => {
    try {
      const articles = await Article.find().sort({ createdAt: -1 });
      res.json(articles);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
//for update the article
  editArticle: async (req, res) => {
    const { id } = req.params;
    try {
      const updatedArticle = await Article.findByIdAndUpdate(id, req.body, { new: true });
      res.json(updatedArticle);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
// to delete article
  deleteArticle: async (req, res) => {
    const { id } = req.params;
    try {
      await Article.findByIdAndDelete(id);
      res.json({ message: 'Article deleted successfully' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  searchArticlesByTitle: async (req, res) => {
    const { title } = req.params;
    try {
      const articles = await Article.find({ title: { $regex: title, $options: 'i' } });
      res.json(articles);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = articleController;
