const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PersonInfoRoute = require("./app/routes/PersonInfo.route");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to GuestInfo Survey" });
});

require("./app/routes/PersonInfo.route")(app);
// app.use("/api/personInfo", PersonInfoRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
