🏡 StayFinder — Full-Stack Airbnb Clone
StayFinder is a full-stack web application inspired by Airbnb that allows users to list and book properties for short-term or long-term stays. This project is designed as an internship assignment to gain hands-on experience in full-stack development.

### 🚀 Features
## 🌐 Frontend  
![React.js + Vite.js](https://img.shields.io/badge/Frontend-React.js+Vite.js-blue)

- 🏠 **Homepage:** Display property cards with images, location, and pricing.  
- 🔍 **Listing Detail Page:** Includes property images, full description, and availability calendar.  
- 🔐 **Authentication:** Login & Register pages with form validation.  
- 📱 **Responsive UI:** Clean and mobile-friendly design inspired by Airbnb, styled using Tailwind CSS.


---

### 🔙 Backend:
![Node.js](https://img.shields.io/badge/Backend-Node.js-Express-brightgreen)
![Auth](https://img.shields.io/badge/Auth-Enabled-brightgreen)**Auth Routes**
**POST /api/register — Register a new user.**
**POST /api/login — Login existing user.**

- ![Listing] (https://img.shields.io/badge/Listing-Route-lawngreen) 🏘️ **Listing Routes**
- **GET /api/listing — Get all listings.**
 **GET /api/listing/:id — Get listing details by ID.**
  **POST /api/listing — Create new listing (host only).**

  - ![Booking](https://img.shields.io/badge/Booking-Route-purple)📆 **Booking Route**
  - `POST /api/booking` — Create a new booking.
