import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Quiz from "./pages/Quiz/Quiz";
import Dashboard from "./pages/Dashboard/Dashboard";
import AboutUs from "./pages/AboutUs/AboutUs";
import HowToPlay from "./pages/HowToPlay/HowToPlay";
import { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "./conponents/ProtectedRoute";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Toaster position="top-center" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
          <Route
            path="/quiz"
            element={
              <ProtectedRoute>
                <Quiz />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;