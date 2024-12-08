const express = require("express");
const { sequelize } = require("./models");
const app = express();
const PORT = 3001;

const db = require("./models");



// Middleware
app.use(express.json()); // For JSON data
app.use(express.urlencoded({ extended: true })); // For form data (application/x-www-form-urlencoded)

// Router
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("server is running on port", PORT);
  });
});
