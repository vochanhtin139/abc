const express = require("express");
const expressHbs = require("express-handlebars");
const app = express();
const port = 3001;

app.use(express.static(__dirname + "/html"));

app.get("/", (req, res) => res.render("index"));

app.engine("hbs",
    expressHbs.engine({
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials",
        extname: "hbs",
        defaultLayout: "layout"
    })
);

app.set("view engine", "hbs");

app.listen(port, () => console.log(`Example app listening on port ${port}`))