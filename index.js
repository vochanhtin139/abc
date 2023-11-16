const express = require("express");
const expressHbs = require("express-handlebars");
const app = express();
const port = 3001;

app.engine("hbs",
    expressHbs.engine({
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials",
        extname: "hbs",
        defaultLayout: "layout"
    })
);

app.set("view engine", "hbs");

app.use(express.static(__dirname + "/html"));

app.get("/", (req, res) => res.render("index"));

app.get("/task1.htm", (req, res) => {
    let {emotions} = require("./data");
    res.locals.emotions = emotions;
    res.render("task1");
});

app.get("/admin", (req, res) => {
    res.render("index", {layout: "admin"});
});


app.listen(port, () => console.log(`Example app listening on port ${port}`))