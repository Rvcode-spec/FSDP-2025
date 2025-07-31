const Listing = require('../models/Listing');

exports.getListing = async (req, resp) => {
    try {
        const listings = await Listing.find().populate('host', 'name');
        resp.json(listings);

    } catch (error) {
        resp.status(500).json({ error: 'Failed to fetch listing' });
    }
}

exports.getListingById = async (req, resp) => {
    try {
          console.log("🔍 Requested ID:", req.params.id);

            const listing = await Listing.findById(req.params.id).populate('host', 'name');
           console.log("📦 Listing found:", listing);

        if (!listing) return resp.status(404).json({ error: 'listing not found' });
        resp.json(listing);
    } catch (error) {
        resp.status(500).json({ error: 'Failed to fetch listing' });
    }
};

exports.createListing = async (req, resp) => {

    try {
        
        const listing = new Listing({ ...req.body, host: req.user.id });
        await listing.save();
        resp.status(201).json({ message: 'Listing Created', listing });

    } catch (error) {
        resp.status(400).json({ error: 'Invalid data' });
    }
}