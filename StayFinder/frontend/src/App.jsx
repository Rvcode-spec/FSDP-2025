import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Navbar/header';
import Home from './component/page/Home';
import { useEffect } from 'react';
import LoginPage from './component/_Auth/login';
import RegisterPage from './component/_Auth/Register';


function App() {
  useEffect(() => {
    const testBackendConnection = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/login`);
        const data = await res.text();
        console.log("🟢 Response from backend:", data);
      } catch (err) {
        console.error("🔴 Error fetching backend:", err);
      }
    };

    testBackendConnection();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
  
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage/>}/>
      </Routes>
    </>
  );
}

export default App;