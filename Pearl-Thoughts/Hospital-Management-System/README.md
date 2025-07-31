Schedula - Update on Healthcare Appointment Backend

Most of the backend routes are completed and everything is functioning as expected. A few routes related to Slots and Appointments, especially for elastic scheduling, are still pending. I’ll be integrating those updates tomorrow morning.

Thank you for your continued patience and support. I’m committed to ensuring everything is finalized and stable by tonight.

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
├── main.ts
├── app.module.ts
├── config/
│   └── config.module.ts
├── common/
│   ├── guards/roles.guard.ts
│   └── decorators/roles.decorator.ts
├── auth/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── auth.module.ts
│   ├── jwt.strategy.ts
│   ├── dto/
│   │   ├── login.dto.ts
│   │   ├── register-doctor.dto.ts
│       └── register-patient.dto.ts
│   
├── doctors/
│   ├── doctors.controller.ts
│   ├── doctors.service.ts
│   ├── doctors.module.ts
│   ├── entities/doctor.entity.ts
│   └── dto/update-doctor.dto.ts
├── patients/
│   ├── patients.controller.ts
│   ├── patients.service.ts
│   ├── patients.module.ts
│   ├── entities/patient.entity.ts
│   └── dto/update-patient.dto.ts
├── slots/
│   ├── slots.controller.ts
│   ├── slots.service.ts
│   ├── slots.module.ts
│   ├── entities/slot.entity.ts
│   └── dto/create-slot.dto.ts
├── appointments/
│   ├── appointments.controller.ts
│   ├── appointments.service.ts
│   ├── appointments.module.ts
│   ├── entities/appointment.entity.ts
│   └── dto/book-appointment.dto.ts

.env
package.json
tsconfig.json
README.md  
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

AuthController {/api/auth}

{/api/auth/login, POST}
{/api/auth/register/doctor, POST}
{/api/auth/register/patient, POST}
{/api/auth/patient/logout, POST}
{/api/auth/doctor/logout, POST}
{/api/auth/patient, GET} +65ms
{/api/auth/patient/profile, GET}
{/api/auth/doctor/profile, GET}

---------------------------------------------------------------------
Doctors
{/api/patients/:id, PATCH}
{/api/patients, GET}
--------------------------------------------------------------

Slots
{/api/slots, POST}
{/api/slots, GET}
{/api/slots/doctor/:id, GET}
{/api/slots/:id/unavailable, PATCH}

Appointments
{/api/appointments/book, POST}
{/api/appointments/patient/:id, GET}
{/api/appointments, GET}
{/api/appointments/cancel/:id, PATCH}  
{/api/appointments/reschedule/:id, PATCH}

---

Dev Tools

- TypeORM CLI
- Postman
- pgAdmin


