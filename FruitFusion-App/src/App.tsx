import React from 'react';
import Router from './Router/router';
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';

function App() {
  return (
    <div className="App">
            <Header/>

     <Router/>
      <Footer/>
    </div>
  );
}

export default App;
