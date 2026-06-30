# 🌦 WeatherGuard
### Secure Invite-Only Weather Alert Management Platform

<p align="center">
  <b>WeatherGuard</b> is a full-stack weather alert platform that combines secure authentication, administrative approval workflows, automated weather monitoring, and Telegram notifications into a single scalable application.
</p>

---

## 📌 Overview

WeatherGuard is designed as a secure, invite-only weather notification platform where users authenticate using Google OAuth, request access to the platform, and await administrator approval before becoming eligible to receive automated weather alerts.

The application demonstrates authentication, authorization, REST API design, scheduled background jobs, third-party API integrations, and modern frontend development using React and TypeScript.

---

# 🚀 Key Features

### 🔐 Secure Google Authentication
- Google OAuth 2.0 Login
- Passport.js authentication strategy
- JWT token generation
- Secure user onboarding

---

### 👨‍💼 Admin Approval Workflow

- Invite-only platform
- Pending user approval system
- Administrator dashboard
- One-click user approval
- Live dashboard statistics

---

### 📊 Admin Dashboard

The dashboard provides administrators with:

- Total Registered Users
- Pending Approval Requests
- Approved Users
- Weather Status Card
- User Management Table
- Approval Confirmation Dialog

---

### 🌤 Weather Monitoring

- OpenWeather API Integration
- Real-time weather information
- Automated weather notifications
- Scheduled background execution using Cron Jobs

---

### 🤖 Telegram Integration

Approved users receive:

- Account approval notification
- Automated weather alerts
- Instant Telegram delivery using Bot API

---

### 📈 Background Scheduling

WeatherGuard continuously monitors weather conditions using:

- NestJS Schedule Module
- Cron Jobs
- Automated execution
- Server-side background tasks

---

# 🏗 System Architecture

```
                        +------------------+
                        | React Frontend   |
                        |  (Admin Panel)   |
                        +---------+--------+
                                  |
                                  |
                          REST API Calls
                                  |
                                  ▼
                    +-------------------------+
                    |     NestJS Backend      |
                    |-------------------------|
                    | Authentication Module   |
                    | Admin Module            |
                    | Users Module            |
                    | Weather Module          |
                    | Telegram Module         |
                    +-----------+-------------+
                                |
          +---------------------+---------------------+
          |                     |                     |
          ▼                     ▼                     ▼
     MongoDB Atlas      Google OAuth API     Telegram Bot API
                                |
                                ▼
                     OpenWeather API
```

---

# 🛠 Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Axios
- CSS3

---

## Backend

- NestJS
- TypeScript
- Node.js
- Express
- Passport.js
- JWT Authentication
- Cron Scheduler

---

## Database

- MongoDB Atlas
- Mongoose ODM

---

## Third Party Services

- Google OAuth 2.0
- Telegram Bot API
- OpenWeather API

---

# 📂 Project Structure

```
WeatherGuard
│
├── admin
│   ├── src
│   ├── public
│   ├── package.json
│
├── api
│   ├── src
│   │
│   ├── auth
│   ├── admin
│   ├── users
│   ├── weather
│   ├── telegram
│   │
│   ├── package.json
│
└── README.md
```

---

# 🔑 Authentication Flow

1. User clicks **Continue with Google**
2. Google OAuth authenticates the user
3. Backend creates or updates the user
4. User status is set to **PENDING**
5. User waits for administrator approval
6. Admin approves request
7. Telegram confirmation is sent
8. User starts receiving automated weather alerts

---

# 📡 REST API

## Authentication

```
GET /auth/google
```

Start Google Login.

---

```
GET /auth/google/callback
```

OAuth Callback.

---

## Admin

```
GET /admin/pending
```

Returns pending users.

---

```
PATCH /admin/approve/:id
```

Approves user.

---

```
GET /admin/stats
```

Returns dashboard statistics.

---

## Weather

```
GET /weather/test
```

Fetches weather and sends Telegram alert.

---

## Telegram

```
POST /telegram/send
```

Sends Telegram message.

---

# 🗄 Database Schema

## User

| Field | Type |
|--------|------|
| name | String |
| email | String |
| provider | String |
| role | String |
| status | String |
| createdAt | Date |

---

# 🔄 Workflow

```
Google Login
      │
      ▼
Create User
      │
      ▼
Status = PENDING
      │
      ▼
Admin Dashboard
      │
Approve User
      │
      ▼
Telegram Notification
      │
      ▼
Scheduled Weather Alerts
```

---

# ⚙ Environment Variables

Create an `.env` file inside the backend.

```
PORT=3000

MONGODB_URI=

JWT_SECRET=

GOOGLE_CLIENT_ID=

GOOGLE_CLIENT_SECRET=

TELEGRAM_BOT_TOKEN=

TELEGRAM_CHAT_ID=

WEATHER_API_KEY=
```

---

# 💻 Local Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/WeatherGuard.git
```

---

## Backend

```bash
cd api
npm install
npm run start:dev
```

---

## Frontend

```bash
cd admin
npm install
npm run dev
```

---

# 📸 Application Screens

- Login Screen
- Google OAuth
- Admin Dashboard
- Pending Users
- Approval Workflow
- Telegram Notification
- Weather Alerts

(Add screenshots here)

---

# 🎯 Project Highlights

✔ Secure Google OAuth Authentication

✔ JWT Token Generation

✔ Invite-only Approval Workflow

✔ MongoDB Atlas Integration

✔ RESTful API Design

✔ Modular NestJS Architecture

✔ Automated Cron Jobs

✔ Telegram Bot Integration

✔ OpenWeather API Integration

✔ Responsive React Dashboard

---

# 🔮 Future Improvements

- Role Based Access Control (RBAC)
- Weather Alert Preferences
- Multiple Cities Support
- Email Notifications
- SMS Alerts
- WebSocket Live Dashboard
- Docker Deployment
- Kubernetes Support
- CI/CD Pipeline
- Unit & Integration Testing

---

# 👨‍💻 Author

**Mehak Bhatt**

B.Tech Information Technology

Passionate about Full Stack Development, Backend Systems, Cloud Technologies, and AI-powered Applications.

---

## ⭐ If you found this project interesting, consider giving it a star!