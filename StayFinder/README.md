Project:- StayFinder is a full-stack web application inspired by Airbnb that allows users to list and book properties for short-term or long-term stays. This project is designed as an internship assignment to gain hands-on experience with both frontend and backend development.




Features:

 Frontend (React.js + vite.js)

- 🏠Homepage Display property cards with image, location, and price.
- 🔍Listing Detail Page Images, full description, and calendar.
- 🔐Authentication Login & Register pages with form validation.
- 🎨 Responsive UI/UX Inspired by Airbnb, built using Tailwind CSS or similar.

-------------------------------------------------------------------------
 Backend (Node.js + Express)
 ✅Auth Routes
  - `POST /api/register`
  - `POST /api/login`
------------------------
🏘️Listing Routes
  - `GET /api/listing`
  - `GET /api/listing/:id`
  - `POST /api/listing`
  
 Booking Route
  - `POST /api/booking`

  ---------------------------

  🌱 Seed Data: sample listing and user data from a JSON file or script.


   Database (MongoDB)
- 👤Users Model
  - name, email, password, role (user/host)
- 🏡Listings Model
  - title, description, price, location, images, hostId
- 📆Bookings Model
  - userId, listingId, checkIn, checkOut,
----------------------------------------------------------------

   Tech        | Role               
|-------------|--------------------|
| React + vite| Frontend Framework |
| Node.js     | Backend Runtime    |
| Express.js  | Backend Framework  |
| MongoDB     | Database           |
| Mongoose    | ODM for MongoDB    |
| JWT + bcrypt| Authentication     |
| Tailwind CSS| Styling (Optional) |
| Figma       | UI Design Reference|





Start Backend : 

cd backend 
Step.1:- npm install 
Step.2:- seed run :-node seed/seed.js  
Step.3:- Server : nodemon 


Start Forntend :

Step.1:- cd frontend
Step.2:- npm install
Step.3:- npm run dev

 
Author:- Ravi Shankar Singh — Web Development Intern.
