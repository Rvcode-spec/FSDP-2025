// const Admin = require('../config/admin');

// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const admin = await Admin.findOne({ email });

//     if (!admin) {
//       return res.status(400).json({ message: 'Invalid Email' });
//     }

//     // Direct password match (not secure – only for testing)
//     if (admin.password !== password) {
//       return res.status(401).json({ message: 'Invalid Password' });
//     }

//     // ✅ Success response
//     return res.status(200).json({ message: 'Admin Login Successful' });

//   } catch (error) {
//     console.error('Login error:', error);
//     return res.status(500).json({ message: 'Server Error' });
//   }
// };
