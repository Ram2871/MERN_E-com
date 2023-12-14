import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ErrorPage from "./components/error-page/ErrorPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Dashboard from "./pages/client/Dashboard";
import HomePage from "./pages/HomePage";
import Private from "./components/routes/Private";
import ForgotPassword from "./pages/auth/ForgotPassword";
import AdminRoute from "./components/routes/AdminRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateCategory from "./pages/admin/CreateCategory";
import CreateProduct from "./pages/admin/CreateProduct";
import UpdateProduct from "./pages/admin/UpdateProduct";
import Products from "./pages/admin/Products";
import Users from "./pages/admin/Users";
import AdminOrders from "./pages/admin/AdminOrders";
import Orders from "./pages/client/Orders";
import Profile from "./pages/client/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<Private />}>
          <Route path="/user/dashboard" element={<Dashboard />} />
          <Route path="/user/orders" element={<Orders />} />
          <Route path="/user/profile" element={<Profile />} />
        </Route>
        <Route path="/admin" element={<AdminRoute />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/create-category" element={<CreateCategory />} />
          <Route path="/admin/create-product" element={<CreateProduct />} />
          <Route path="/admin/product/:slug" element={<UpdateProduct />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
