const express = require("express");
const path = require("path");
const users = require("./users/index");

const port = 5000;
const app = express();

const basePath = path.join(__dirname, "Templates");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", users);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
