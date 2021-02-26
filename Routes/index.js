const articleRoutes = require("./article.routes");

const createRoutes = app => {
    app.use("/api/v1/article", articleRoutes);

}

module.exports = createRoutes;