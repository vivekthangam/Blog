const articleRoutes = require("./article.routes");

const createRoutes = app => {
    app.use("/articles", articleRoutes);

}

module.exports = createRoutes;