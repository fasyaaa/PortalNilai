const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

// import routes file

// Login
const loginRouter = require("./routes/login");
app.use("/portalnilai", loginRouter);

// redirect awalan
app.get("/", (req, res) => {
  res.redirect("/portalnilai/");
});

const mahasiswaRouter = require("./routes/mahasiswa");
app.use("/portalnilai/mahasiswa", mahasiswaRouter);


app.listen(port, () => {
    console.log(`Website listening at http://localhost:${port}`);
  });
