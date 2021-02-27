const express = require('express');
const Article = require('../Model/article');
const router = express.Router();


router.post('/', async(req, res) => {

    console.log(req.body);
    const _article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    });
    try {
        await Article.save();
        res.redirect(`/articles/${_article.id}`);
    } catch (e) {
        res.render("/articles/new", { article: _article });
    }

});



router.get('/:id', (req, res) => {

    res.render("newArticle");
});


router.get('/new', (req, res) => {

    res.render("newArticle", { article: new Article() });
});

module.exports = router;