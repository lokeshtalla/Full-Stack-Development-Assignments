const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://tallalokeshedu:OVw4arCeVirPEiOQ@cluster0.zta3d3c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected Successfully"))
.catch(err => console.error("MongoDB Connection Error:", err));

module.exports = mongoose;
