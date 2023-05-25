
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import MainLayout from './components/Mainlayout/MainLayout';
import Dashboard from './pages/Dashboard/Dashboard';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/forgot-password" element={<ForgetPassword />} />
      <Route path="/admin" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
