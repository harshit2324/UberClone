const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectToDb = require("./db/db");
const userRoutes = require("./routes/user.routes");
const cokieParser = require("cookie-parser");
const captainRoutes = require("./routes/captain.routes");
const mapsRoutes = require("./routes/maps.routes");
const rideRoutes = require("./routes/ride.routes");

connectToDb();

// const corsOptions = {
//   origin: 'http://localhost:5173',  // Frontend domain
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],        // Allowed HTTP methods
//   allowedHeaders: ['Content-Type'], // Allowed headers
//   credentials: true,                // If you want to send cookies/auth headers
// };

app.use((req, res, next) => {
  console.log(`${req.method} request made to: ${req.url}`);
  next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cokieParser());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/users", userRoutes);

app.use("/captain", captainRoutes);

app.use("/maps", mapsRoutes);

app.use("/rides", rideRoutes);

module.exports = { app };
