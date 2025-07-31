# 🏡 StayFinder — Full-Stack Airbnb 

**StayFinder** is a full-stack web application inspired by Airbnb, allowing users to list and book properties for short-term or long-term stays.  
This project was created as an internship assignment to gain hands-on experience in full-stack development.

---

🌍 Tech Stack
-Frontend: React.js, Vite.js, Tailwind CSS
-Backend: Node.js, Express.js, MongoDB
-Authentication: JWT-based Auth
-Other Tools: Axios, Nodemon, MongoDB Atlas

### 🚀 Features
-✅ Add date filtering and search functionality
-✅ Image upload for hosts
-⏳ Payment integration
-⏳ Review and rating system

### 🌐 Frontend  
![Frontend](https://img.shields.io/badge/Frontend-React.js+Vite.js-blue)

- 🏠 **Homepage** — Displays property cards with images, location, and pricing  
- 🔍 **Listing Detail Page** — Full description, images, and an availability calendar  
- 🔐 **Authentication** — Login/Register with form validation  
- 📱 **Responsive Design** — Mobile-friendly UI styled with **Tailwind CSS**

---

### 🔙 Backend  
![Backend](https://img.shields.io/badge/Backend-Node.js%20%7C%20Express-brightgreen)  
![Auth](https://img.shields.io/badge/Auth-Enabled-brightgreen)

#### 🔐 Auth Routes

- `POST /api/register` — Register a new user  
- `POST /api/login` — Login an existing user  

---

![Listing](https://img.shields.io/badge/Listing-Routes-lawngreen)

#### 🏘️ Listing Routes

- `GET /api/listing` — Fetch all listings  
- `GET /api/listing/:id` — Fetch single listing by ID  
- `POST /api/listing` — Create new listing (Host only)  

---

![Booking](https://img.shields.io/badge/Booking-Route-purple)

#### 📆 Booking Route

- `POST /api/booking` — Create a new booking

---

## 🧪 Getting Started
```bash
git clone --filter=blob:none --no-checkout git@github.com:Rvcode-spec/Full-Stack-Solution-2025.git
cd Full-Stack-Solution-2025
git sparse-checkout init --cone
git sparse-checkout set The Glen
git checkout

#💻 Frontend Setup
cd The Glen
cd ./StayFinder/frontend
npm install         # Install frontend dependencies
npm run dev         # Start Vite development server

# 📦 Backend Setup
cd The Glen
cd ./StayFinder/backend
npm install         # Install backend dependencies
node seed/seed.js   # Seed initial property data
nodemon             # Start backend development server
