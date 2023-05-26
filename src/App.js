
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import MainLayout from './components/Mainlayout/MainLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Addblog from './pages/Addblog/Addblog';
import Customers from './pages/Customers/Customers';
import Enquries from './pages/Enquries/Enquries';
import Bloglist from './pages/Bloglist/Bloglist';
import BlogCatlist from './pages/BlogCatlist/BlogCatlist';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/forgot-password" element={<ForgetPassword />} />
      <Route path="/admin" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        


          <Route path="enquiries" element={<Enquries />} />
          {/* <Route path="enquiries/:id" element={<ViewEnq />} /> */}
          <Route path="blog-list" element={<Bloglist />} /> 
          <Route path="blog" element={<Addblog />} /> 
          <Route path="blog/:id" element={<Addblog />} />
            {/* <Route path="coupon-list" element={<Couponlist />} />
          <Route path="coupon" element={<AddCoupon />} />
          <Route path="coupon/:id" element={<AddCoupon />} /> */}
          <Route path="blog-category-list" element={<BlogCatlist />} />
          {/* <Route path="blog-category" element={<Addblogcat />} />
          <Route path="blog-category/:id" element={<Addblogcat />} /> */}
          {/* <Route path="orders" element={<Orders />} /> */}
          {/* <Route path="order/:id" element={<ViewOrder />} />  */}
           <Route path="customers" element={<Customers />} />
          {/* <Route path="list-color" element={<Colorlist />} />
          <Route path="color" element={<Addcolor />} />
          <Route path="color/:id" element={<Addcolor />} />
          <Route path="list-category" element={<Categorylist />} />
          <Route path="category" element={<Addcat />} />
          <Route path="category/:id" element={<Addcat />} />
          <Route path="list-brand" element={<Brandlist />} />
          <Route path="brand" element={<Addbrand />} />
          <Route path="brand/:id" element={<Addbrand />} />
          <Route path="list-product" element={<Productlist />} />
          <Route path="product" element={<Addproduct />} /> */} 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
