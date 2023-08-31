const express = require("express");
const path = require("path");

const router = express.Router();
const basePath = path.join(__dirname, "../Templates");

const usersBD = [];

function Accounts(name, age, email, password) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.password = password;
}

router.get("/login", (req, res) => {
  res.sendFile(`${basePath}/login.html`);
});

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (usersBD.length === 0) {
    console.log("Nenhuma conta foi criada!");
    res.redirect("/");
    return;
  }

  usersBD.forEach((account) => {
    if (account.email === email && account.password === password) {
      res.sendFile(`${basePath}/index.html`);
      return;
    }
    console.log("Usuário não encontrado");
  });
});

router.get("/new", (req, res) => {
  res.sendFile(`${basePath}/cadastro.html`);
});

router.post("/new", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const email = req.body.email;
  const password = req.body.password;

  usersBD.push(new Accounts(name, age, email, password));
  res.sendFile(`${basePath}/index.html`);
  console.log(usersBD);
});

module.exports = router;
