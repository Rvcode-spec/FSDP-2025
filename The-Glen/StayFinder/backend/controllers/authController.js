const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.register = async (req, resp) => {

    const { name, email, password, isHost } = req.body;

    const user = await User.findOne({ email });
    if (user) return resp.status(401).send("already registered");

    try {
        const salt = parseInt(process.env.SALT_ROUNDS) || 10;
        const hashPassword = await bcrypt.hash(password, salt);

        let user = new User({
            name,
            isHost,
            email,
            password: hashPassword,
        })


        await user.save();
        resp.status(201).json({ result: 'User Register Successful' })
    }
    catch (error) {
        console.log(error);
        resp.status(500).send("Something is Wrong");
    }
}

exports.login = async (req, resp) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return resp.status(401).send("Invalid Email");

    try {
        const auth = await bcrypt.compare(password, user.password);
        if (!auth) return resp.status(401).send("Password is not Match");


        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });


        resp.json({ token, user: { name: user.name, email: user.email, isHost: user.isHost } });

    } catch (error) {
        resp.status(500).json({ error: 'Login failed' })

    }
}
