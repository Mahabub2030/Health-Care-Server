🏥 Health Care Server

A backend API for managing healthcare services, patients, and appointments — built with Express.js, TypeScript, Prisma ORM, and MongoDB.
This project follows clean architecture principles with modular code organization, validation, and RESTful endpoints.

🚀 Tech Stack
Technology Purpose
TypeScript Type-safe JavaScript for maintainable code
Express.js Web framework for building RESTful APIs
Prisma ORM Type-safe database ORM for MongoDB
MongoDB NoSQL database for scalable data storage
Zod / Joi Schema validation (if used)
dotenv Manage environment variables
ts-node-dev Run TypeScript in development
📁 Project Structure
health-care-server/
├─ prisma/
│ └─ schema.prisma
├─ src/
│ ├─ config/
│ │ └─ index.ts
│ ├─ modules/
│ │ ├─ patient/
│ │ │ ├─ patient.controller.ts
│ │ │ ├─ patient.service.ts
│ │ │ ├─ patient.route.ts
│ │ │ └─ patient.validation.ts
│ │ ├─ appointment/
│ │ │ ├─ appointment.controller.ts
│ │ │ ├─ appointment.service.ts
│ │ │ ├─ appointment.route.ts
│ │ │ └─ appointment.validation.ts
│ │ └─ doctor/
│ │ ├─ doctor.controller.ts
│ │ ├─ doctor.service.ts
│ │ ├─ doctor.route.ts
│ │ └─ doctor.validation.ts
│ ├─ app.ts
│ └─ server.ts
├─ .env
├─ package.json
├─ tsconfig.json
└─ README.md

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/yourusername/health-care-server.git
cd health-care-server

2️⃣ Install dependencies
npm install

3️⃣ Configure environment variables

Create a .env file in the project root:

DATABASE_URL="mongodb+srv://<username>:<password>@cluster.mongodb.net/healthcare"
PORT=5000

4️⃣ Initialize Prisma
npx prisma generate
npx prisma db push

This generates your Prisma client and syncs the schema with MongoDB.

5️⃣ Run the development server
npm run dev

Server will start at:
👉 http://localhost:5000

🧩 Example Prisma Schema (prisma/schema.prisma)
generator client {
provider = "prisma-client-js"
}

datasource db {
provider = "mongodb"
url = env("DATABASE_URL")
}

model Patient {
id String @id @default(auto()) @map("\_id") @db.ObjectId
name String
email String @unique
age Int
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
appointments Appointment[]
}

model Doctor {
id String @id @default(auto()) @map("\_id") @db.ObjectId
name String
specialization String
appointments Appointment[]
}

model Appointment {
id String @id @default(auto()) @map("\_id") @db.ObjectId
date DateTime
patientId String
doctorId String
patient Patient @relation(fields: [patientId], references: [id])
doctor Doctor @relation(fields: [doctorId], references: [id])
}
