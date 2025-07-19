Schedula - Healthcare Appointment Backend

Hello,
A few routes are still pending. I’m currently working on them and will make sure everything is completed by tonight.
Thank you for your patience.

Tech Stack

- NestJS
- PostgreSQL
- TypeORM
- JWT
- class-validator
- @nestjs/config

---

Folder Structure
src/
|-- auth/ # Authentication (JWT, login)
|-- doctors/ # Doctor CRUD and availability
|-- patients/ # Patient profile management
|-- slots/ # Slot creation and scheduling
|-- appointments/ # Book and manage appointments
|-- config/ # Environment & TypeORM config
|-- main.ts # Application entry point
|-- app.module.ts Root application module

---

Environment Variables

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=Vsnl@123
DB_NAME=hospital_management_system

# JWT Secret Key

JWT_SECRET=supersecretjwtkey
JWT_EXPIRES_IN=7d

# App Port (optional)

PORT=3000

---

Running the App

# Install dependencies

npm install

# Start PostgreSQL if needed

# pgAdmin/Services on Windows

# Run the app

npm run start:dev

---

Auth
POST /auth/login
Doctors
POST /doctors/register
GET /doctors
PATCH /doctors/:id
Patients
POST /patients/register
GET /patients/:id
Slots
POST /slots/create
GET /slots/doctor/:doctorId

Appointments

POST /appointments/book
GET /appointments/patient/:patientId

---

Dev Tools

- TypeORM CLI
- Postman
- pgAdmin
