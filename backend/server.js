const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
var morgan = require("morgan");

const connectDB = require("./config/db");
const products = require("./data/products");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
dotenv.config();

connectDB();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

// app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

const dirname = path.resolve();
app.use("/uploads", express.static(path.join(dirname, "/uploads")));


//serving the frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is runinng ...");
  });
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold
  )
);
