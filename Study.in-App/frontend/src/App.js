
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
