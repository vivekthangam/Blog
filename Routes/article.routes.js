const express = require('express');
const Article = require('../Model/article');
const router = express.Router();


router.post('/', async(req, res) => {

    const Article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    });
    try {
        await Article.save();
        res.redirect(`/articles/${Article.id}`);
    } catch (e) {
        res.render("/articles/new", { articles: _article });
    }

});



router.get('/:id', (req, res) => {

    res.render("newArticle");
});


router.get('/new', (req, res) => {

    res.render("newArticle");
});

module.exports = router;