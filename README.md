# Quizzy 🎯

A Gamified Quizzing Website that makes learning fun and interactive! Challenge yourself with timed multiple-choice quizzes, track your progress, and enhance your knowledge through detailed performance insights.

## ✨ Features

- **Timed Quizzes**: Fast-paced, multiple-choice questions with countdown timer
- **Smart User Management**: Secure signup/login with password hashing and JWT authentication
- **Comprehensive Performance Analytics**: Detailed reports showing correct/incorrect answers, final scores, and complete solutions
- **Gamified Experience**: Engaging interface with instant feedback and progress tracking

- **Intuitive Design**: Smooth navigation and user-friendly interface
- **Real-time Feedback**: Instant response validation to optimize learning

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- Tailwind CSS
- JavaScript
- React.js

### Backend
- Node.js
- Express.js
- MongoDB

### Key Packages
- bcrypt (password hashing)
- jsonwebtoken (authentication)
- cookie-parser (cookie management)
- React Router DOM (navigation)
- mongoose (MongoDB ODM)
- dotenv (environment variables)
- react-hot-toast (notifications)

## 🎯 Additional Features

- Integrated react-hot-toast for seamless user notifications
- Questions fetched from API (https://api.jsonserve.com/Uw5CrX)
- Protected routes for secure account access
- Auto-submission when quiz timer expires
- Responsive design for all devices

## Live Demo
<video controls src="Quizzy - Google Chrome 2025-02-01 23-00-39.mp4" title="Title"></video>

#### Home Page
![alt text](<Screenshot 2025-02-01 223108.png>)

#### Login Page
![alt text](<Screenshot 2025-02-01 223227.png>)

#### SignUp Page
![alt text](<Screenshot 2025-02-01 223310.png>)

#### Dashboard
![alt text](<Screenshot 2025-02-01 223519.png>)

#### How To Play Page
![alt text](<Screenshot 2025-02-01 223139.png>)

![alt text](<Screenshot 2025-02-01 223158.png>)

#### About us Page
![alt text](<Screenshot 2025-02-01 223211.png>)

![alt text](<Screenshot 2025-02-01 223218.png>)

#### Quiz Page
![alt text](<Screenshot 2025-02-01 223413.png>)

#### Result Page
![alt text](<Screenshot 2025-02-01 223442.png>)

![alt text](<Screenshot 2025-02-01 223505.png>)



## 🚀 Getting Started

### Prerequisites

1. Node.js (v14.x or higher)
   ```bash
   # Verify installation
   node --version
   npm --version
   ```

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/MayankV004/Quizzy.git
   ```

2. **Backend Setup**
   ```bash
   # Navigate to backend
   cd backend

   # Install dependencies
   npm install

   # Create .env file with:
   JWT_SECRET=your_secret_key
   PORT=3000
   MONGO_URI=mongodb://127.0.0.1:27017/quizzy
   ```

   Configure MongoDB:
   - Create a database named 'quizzy'
   - Update connection string in mongoose-connection.js
   - Please make sure to have MongoDB compass for database
   

   ```bash
   # Start server
   npm run start
   ```

3. **Frontend Setup**
   ```bash
   # Navigate to frontend
   cd frontend

   # Install dependencies
   npm install

   # Start development server
   npm run dev
   ```

The application should now be running at `http://localhost:5174`. If using a different port, update the CORS origin in backend's index.js.

## 📱 Application Views

- **Authentication Pages**: Secure signup and login interfaces
- **Home**: Dynamic dashboard with quiz categories
- **Quiz Interface**: Interactive quiz environment with timer
- **Results**: Comprehensive performance analysis
- **Review**: Detailed solution explanations
- **Account**: Personal profile and statistics
- **About**: Project and team information

## 🤝 Contributing

Contributions are welcome! Feel free to submit pull requests or open issues for improvements.
