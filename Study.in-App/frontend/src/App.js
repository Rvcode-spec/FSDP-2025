import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
// import Login from "./Components/Login";
// import SignUp from "./Components/SignUp";

function App() {
  return (
    <div className="App">
     <Nav/>
     <Home/>
     {/* <Login/>
     <SignUp/> */}

     <Footer/>
    </div>
  );
}

export default App;
