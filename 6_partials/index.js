const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const port = 3000;

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/post", (req, res) => {
  const post = {
    title: "With Handlebars",
    category: "Javascript Node.js",
    body: "Article about With Handlebars",
    comments: 5,
  };
  res.render("blogpost", { post });
});

app.get("/dashboard", (req, res) => {
  const items = ["item a", "Item b", "Item c"];
  res.render("dashboard", { items });
});

app.get("/blog", (req, res) => {
  const posts = [
    {
      title: "Aprender Node.js",
      category: "Javascript",
      body: "Teste",
      comments: 9,
    },

    {
      title: "Aprender MongoDB",
      category: "MongoDB",
      body: "Teste",
      comments: 4,
    },
    {
      title: "Aprender SQL",
      category: "SQL",
      body: "Teste",
      comments: 3,
    },
  ];
  res.render("blog", { posts });
});

app.get("/", (req, res) => {
  const user = {
    name: "Cadu",
    age: "18",
  };

  const auth = checkAge(user.age);

  res.render("home", { user: user, auth });
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
