const controller = {};

controller.show = (req, res) => {
    let {categories} = require("../data");
    let {products} = require("../data");

    let productList = req.query.category ? products.filter((item) => item.category == req.query.category) : products;

    // res.locals.categories = categories;
    // res.locals.products = products;

    res.render("task3", {
        products: productList,
        categories
    });
};

module.exports = controller;