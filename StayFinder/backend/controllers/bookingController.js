const Booking = require('../models/booking');

exports.createBooking = async (req, resp) => {
    try {
        const { listing, startDate, endDate, totalPrice } = req.body;
         res.status(201).send("User booking!");

        const booking = new Booking({
            user: req.user.id,
            listing,
            startDate,
            endDate,
            totalPrice  // ✅ Fixed spelling
        });

        await booking.save();

        resp.status(201).json({ message: 'Booking created', booking });
    } catch (error) {
        console.error("Booking error:", error);
        resp.status(400).json({ error: 'Booking failed' });
    }
}
