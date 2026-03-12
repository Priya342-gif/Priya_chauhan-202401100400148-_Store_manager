const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

// Routes
const employeeRoutes = require("./routes/employeeRoutes");
app.use("/employees", employeeRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("API Running...");
});

// Error Middleware
const errorHandler = require("./middleware/errorMiddleware");

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});