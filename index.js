const express = require('express');

const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
require("./Routes/index")(app);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    const _article = [{
            title: "How to connect to vpn in chrome and firefox using extension",
            createdAt: new Date(),
            description: "Lorem ipsum"
        },
        {
            title: "post 2",
            createdAt: new Date(),
            description: "Added for testing"
        }
    ];
    res.render("index", { articles: _article });
});

app.listen(4444, () => {
    console.log("Server Running on 4444");
});