# 📦Hospital -  Healthcare Appointment Backend

A robust backend system for managing healthcare appointments, featuring secure JWT authentication, doctor-patient registration, slot scheduling, and appointment booking with rescheduling and cancellation. Built using NestJS, PostgreSQL, and TypeORM, it ensures efficient, scalable, and modular management of medical services. Ideal for clinics, hospitals, or telemedicine platforms.
---

## 💻 Tech Stack

- ![NestJS](https://img.shields.io/badge/Backend-NestJS-red)
- ![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-darkviolet)
- ![TypeORM](https://img.shields.io/badge/TypeScript-TypeORM-chartreuse)
- ![JWT](https://img.shields.io/badge/JWT-cyan)
- ![class-validator](https://img.shields.io/badge/class-validator-sandybrown)
- ![@nestjs/config](https://img.shields.io/badge/%40nestjs%2Fconfig-darkgoldenrod)

---

## 📝 Features
### ![Auth](https://img.shields.io/badge/Auth-Enabled-brightgreen) 🔐 Authentication
- JWT-based secure login and session handling  
- Separate registration for doctors and patients  
- Profile access and logout for both roles  

---

### ![Doctor](https://img.shields.io/badge/Doctor--Management-Active-blue) 🧑‍⚕️ Doctor Management
- Doctor profile creation and updates  
- Access to patient information  

---

### ![Patient](https://img.shields.io/badge/Patient--Management-Active-orange) 👤 Patient Management
- Patient profile creation and updates  
- View personal appointments and history  

---

### ![Slots](https://img.shields.io/badge/Slot--System-Active-yellow) 📅 Slot Management
- Doctors can create and manage available time slots  
- Mark slots as unavailable when needed  
- Filter slots by doctor  

---

### ![Appointments](https://img.shields.io/badge/Appointments-Full%20Control-red) 📋 Appointment Management
- Patients can book appointments from available slots  
- Cancel or reschedule appointments as needed  
- Admin view of all appointments  

---

### ![Access](https://img.shields.io/badge/Access-Control-important) 🛡 Role-Based Access Control
- Guards and decorators to secure protected routes  
- Role-specific permissions for doctors and patients  

---

### ⚙️ Additional Features
- PostgreSQL + TypeORM for fast, scalable data handling  
- `.env`-based secure environment configuration  
- API testing via Postman  
- Database management using pgAdmin  

---


**⚙️ Additional Features**
- PostgreSQL + TypeORM for fast, scalable data handling  
- `.env`-based secure environment configuration  
- API testing via Postman  
- Database management using pgAdmin  

```bash
# Install dependencies
# Start PostgreSQL if needed
# pgAdmin/Services on Windows

npm install
# Run the app
npm run start:dev


