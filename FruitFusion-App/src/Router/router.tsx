import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import Cart from '../Pages/Cart'
import Shop from '../Pages/Shop'
import Checkout from '../Pages/Checkout'
import Shopdetail from '../Pages/Shopdetails'
import Thanks from '../Pages/Thanks'
import Contact from '../Pages/Contact'
import Auth from '../Pages/Admin/Auth'
import Profile from '../Pages/Admin/Profile/Profile'
import ProfileAddEdir from '../Pages/Admin/Profile/ProfileAddEdir'
import Category from '../Pages/Admin/Category/Category'
import CatergoryAddEdit from '../Pages/Admin/Category/CatergoryAddEdit'
import Order from '../Pages/Admin/Order/Order'
import Vieworder from '../Pages/Admin/Order/Vieworder'
import Product from '../Pages/Admin/Product/Product'
import ProductAddEdit from '../Pages/Admin/Product/ProductAddEdit'
import Notfound from '../Pages/Notfound'
const Router = () => {
  return (
    <Routes>
    {/* Public Routes */}
    <Route path="/" element={<Homepage />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/shopdetails" element={<Shopdetail />} />
    <Route path="/thanks" element={<Thanks />} />
    <Route path="/contact" element={<Contact />} />

    {/* Admin Routes */}
    <Route path="/admin" element={<Auth />}>
      {/* Profile */}
      <Route path="profile" element={<Profile />} />
      <Route path="profile/add" element={<ProfileAddEdir />} />
      <Route path="profile/edit" element={<ProfileAddEdir />} />

      {/* Category */}
      <Route path="category" element={<Category />} />
      <Route path="category/add" element={<CatergoryAddEdit />} />
      <Route path="category/edit" element={<CatergoryAddEdit />} />

      {/* Order */}
      <Route path="order" element={<Order />} />
      <Route path="order/view" element={<Vieworder />} />

      {/* Product */}
      <Route path="product" element={<Product />} />
      <Route path="product/add" element={<ProductAddEdit />} />
      <Route path="product/edit" element={<ProductAddEdit />} />
    </Route>

    {/* Fallback Route */}
    <Route path="*" element={<Notfound />} />
  </Routes>
  )
}

export default Router