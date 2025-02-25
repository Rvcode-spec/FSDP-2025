import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import PrivateRoute from './Components/PrivateRoute';
import AddProduct from './Components/AddProduct';
import Footer from './Components/FooterUI';
import ProductsList from './Components/ProductsList';
import SignUp from './Comp-2/SignUp';
import UpdateProduct from './Components/UpdateList';
import Login from './Comp-2/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/AddProduct" element={<AddProduct />} />
            <Route path="/ProductList" element={<ProductsList />} />
            <Route path="/update-product" element={<UpdateProduct />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        {/* Footer placed outside of Routes since it doesn't need to be wrapped in <Route> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
