import './App.css';
import Header from './component/Navbar/header';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/test`)
      .then(res => res.text())
      .then(data => {
        console.log("Response from backend:", data);
      })
      .catch(err => {
        console.error("Error fetching backend:", err);
      });
  }, []);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
