const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Listing = require("../models/Listing");
const listings = require("./listings.json");

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ Connected to DB");

    await Listing.deleteMany();
    await Listing.insertMany(listings); 

    console.log("🌱 Listings seeded successfully!");
    process.exit();
  })
  .catch((err) => {
    console.error("❌ DB connection failed", err);
    process.exit(1);
  });
