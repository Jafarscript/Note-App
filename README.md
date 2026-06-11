# Notes App with Authentication

A full stack notes app with JWT authentication and per-user data 
scoping. Users can register, log in, and manage their own private 
notes — no one else can see or access them.

## 🔗 Live Demo
[job-tracker.vercel.app](https://your-link.vercel.app)

## 📸 Screenshot
![App Screenshot](./screenshot.png)

## ✨ Features
- Register and login with JWT authentication
- Passwords hashed securely with bcrypt
- Per-user data scoping — each user sees only their own notes
- Protected routes — unauthenticated users redirected to login
- Add and delete notes
- Responsive design across all screen sizes

## 🛠 Tech Stack
**Frontend:** React, Tailwind CSS, Axios  
**Backend:** Node.js, Express.js, JWT, Bcrypt  
**Database:** MongoDB, Mongoose  
**Deployment:** Vercel (frontend), Render (backend)

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- MongoDB Atlas account

### Installation

# Clone the repository
git clone https://github.com/Jafarscript/Note-App.git

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd client
npm install

### Running the app

# Run backend
cd backend
npm run dev

# Run frontend
cd frontend
npm run dev

## 🔐 Environment Variables

Create a `.env` file in the backend folder:

MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5050

Create a `.env` file in the frontend folder:

VITE_API_URL=http://localhost:5050

## 👤 Author
**Li-hammed Jafar (Jafarscript)**  
GitHub: [@Jafarscript](https://github.com/Jafarscript)  
LinkedIn: [linkedin.com/in/jafar-li-hammed-8817a91b4](https://linkedin.com/in/jafar-li-hammed-8817a91b4/)
