const express = require("express");
const app = express();

const mongoose = require("mongoose");

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // Request bodylarini parse yani o'qib berish un ishlatiladi

// ENV filedagi global fillararo o'zgaruvchilarni o'qish un
require("dotenv/config");

// Import routes
const postsRoute = require("./routes/posts.js");

app.use("/posts", postsRoute);

// Yo'llar

app.get("/", (req, res) => {
  res.send("Ishladi");
});

// DB bilan bog'lanish un
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("Connected to DB")
);

// Serverni eshtish uchun
app.listen(3000);
