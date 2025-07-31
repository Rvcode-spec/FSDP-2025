# 📦Hospital -  Healthcare Appointment Backend

A robust backend system for managing healthcare appointments, featuring secure JWT authentication, doctor-patient registration, slot scheduling, and appointment booking with rescheduling and cancellation. Built using NestJS, PostgreSQL, and TypeORM, it ensures efficient, scalable, and modular management of medical services. Ideal for clinics, hospitals, or telemedicine platforms.
---

## 💻 Tech Stack

- ![NestJS](https://img.shields.io/badge/Backend-NestJS-red)
- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-darkviolet)
- ![TypeORM](https://img.shields.io/badge/TypeORM-chartreuse)
- ![JWT](https://img.shields.io/badge/JWT-cyan)
- ![class-validator](https://img.shields.io/badge/class-validator-sandybrown)
- ![@nestjs/config](https://img.shields.io/badge/%40nestjs%2Fconfig-darkgoldenrod)

---

## 📝 Features
- ![Auth](https://img.shields.io/badge/Auth-Enabled-brightgreen) **🔐 Authentication**
**1.JWT-based secure login and session handling**
**2. Separate registration for doctors and patients**
**3.Profile access and logout for both roles**

 ![Doctor-Management](https://img.shields.io/badge/Doctor-Management-darkgray) **🧑‍⚕️ Doctor Management**
**Doctor profile creation and updates**
**Access to patient information**


**👤 Patient Management**
**Patient profile creation and updates**
**View own appointments and history**
📅 Slot Management
**Doctors can create available time slots**
**Mark slots as unavailable when needed**
**Filter slots by doctor**
**📋 Appointment Management**
**Patients can book appointments using available slots**
**Options to cancel or reschedule appointments**
**Admin view of all appointments**

**🛡 Role-Based Access Control**
**Guards and decorators used to protect sensitive routes**
**Role-specific permissions (doctor/patient)**


**⚙️ Additional Features**
```bash
# Install dependencies
# Start PostgreSQL if needed
# pgAdmin/Services on Windows

npm install
# Run the app
npm run start:dev


