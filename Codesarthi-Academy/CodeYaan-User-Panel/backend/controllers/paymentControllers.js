const stripe = require('stripe')(process.env.STRIPE_SECRET_PAYMENT_KEY);
const course = require('../models/course');
const asyncHandler = require('../utils/asyncHandler');

exports.createCheckoutSession = asyncHandler(async (req, resp) => {
    const { courseID } = req.body;

    const course = await course.findByID(courseID);
    if(!courseID){
        return resp.status(404).json({ message: "Course not found" });
    }

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: course.name,
                    },
                    unit_amount_decimal:course.price.toFixed(2).toString() // Stripe expects amount in cents/paise
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: 'http://localhost:4242/success.html',
        cancel_url: 'http://localhost:4242/cancel.html',
    });

    resp.status(200).json({ id: session.id });
    // console.log(session.id);
    
});
