const Listing = require('../models/Listing');

exports.getListing = async (req, resp) => {
    try {
        const listings = await Listing.find().populate('name');
        resp.json(listings);
    } catch (error) {
        resp.status(500).json({ error: 'Failed to fetch listing' });
    }
};

exports.getListingById = async (req, resp) => {
    try {
        console.log("🔍 Requested ID:", req.params.id);
        const listing = await Listing.findById(req.params.id).populate('name');
        console.log("📦 Listing found:", listing);

        if (!listing) return resp.status(404).json({ error: 'Listing not found' });
        resp.json(listing);
    } catch (error) {
        resp.status(500).json({ error: 'Failed to fetch listing' });
    }
};

exports.createListing = async (req, resp) => {
    try {
        // req.files will be an array of uploaded images from Multer-Cloudinary
        const imageUrls = req.files.map(file => file.path); // file.path = cloudinary URL

        const listing = new Listing({
            ...req.body,
            images: imageUrls,
            host: req.user.id
        });

        await listing.save();
        resp.status(201).json({ message: 'Listing Created', listing });
    } catch (error) {
        console.error("❌ Error in createListing:", error);
        resp.status(400).json({ error: 'Invalid data' });
    }
};
