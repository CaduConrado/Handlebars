const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const port = 3000;
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  const user = {
    name: "Cadu",
    age: "17",
  };
  res.render("home", { user: user });
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
