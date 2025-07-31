import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './component/Navbar/header';
import Home from './component/page/Home';
import { useEffect } from 'react';
import LoginPage from './component/_Auth/login';
import RegisterPage from './component/_Auth/Register';
import Dashboard from './component/page/Dashbord';
import UserProfile from './component/_common/UserProfile';

function App() {
  const location = useLocation();

  useEffect(() => {
    const testBackendConnection = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/`);
        const data = await res.text();
        console.log("🟢 Response from backend:", data);
      } catch (err) {
        console.error("🔴 Error fetching backend:", err);
      }
    };

    testBackendConnection();
  }, []);

  // Check if current path is /dashboard
  const isDashboardPage = location.pathname === "/dashboard";

  return (
    <>
      {/* Conditionally render Header */}
      {!isDashboardPage && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;
