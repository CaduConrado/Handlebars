const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const port = 3000;
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  const user = {
    name: "Cadu",
    age: "18",
  };

  const auth = checkAge(user.age);

  res.render("home", { user: user, auth });
});

app.get("/dashboard", (req, res) => {
  const items = ["item a", "Item b", "Item c"];
  res.render("dashboard", { items });
});

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
