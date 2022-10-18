const express = require("express");
const app = express();
const router = require("./routes/routes");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT;

// cors middleware to allow connection for front/backend
app.use(cors());
// middleware
app.use(express.json());

// connect to mongoDB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/movie-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB is connected"))
  .catch((err) => console.log(err));

app.use("/", router);

// connects to port
app.listen(port, () => console.log(`server is running on ${port}`));
