const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors()); // CORS को सक्षम करें

app.get("/api/data", async (req, res) => {
  try {
    const response = await fetch("https://api.jsonserve.com/Uw5CrX");
    if (!response.ok) throw new Error("Failed to fetch data");

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
