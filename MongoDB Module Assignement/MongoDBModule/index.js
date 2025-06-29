const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect("mongodb+srv://tallalokeshedu:OVw4arCeVirPEiOQ@cluster0.zta3d3c.mongodb.net/testDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("Connection Error:", err));

// Root route (optional but useful)
app.get('/', (req, res) => {
  res.send('Welcome to the User API! Use /api/users');
});

// API routes
app.use("/api", userRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
