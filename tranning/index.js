const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
  helpers: {
    encodeURIComponent: function (str) {
      return encodeURIComponent(str);
    },
    json: function (obj) {
      return JSON.stringify(obj);
    },
  },
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  const products = [
    {
      title: "Parafina",
      brand: "Fuwax",
      price: "25.00",
    },
    {
      title: "Leash",
      brand: "Rip Curl",
      price: "350.00",
    },
    {
      title: "Protetor Solar",
      brand: "Brazinco",
      price: "60.00",
    },
  ];
  res.render("home", { products });
});

app.get("/product", (req, res) => {
  const productData = JSON.parse(decodeURIComponent(req.query.data));
  console.log(productData);

  res.render("prodPage", { productData });
});

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
