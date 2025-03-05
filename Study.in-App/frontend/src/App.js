
import './App.css';
import Nav from './compontens/Nav';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
