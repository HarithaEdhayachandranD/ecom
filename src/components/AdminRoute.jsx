import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
  const role = sessionStorage.getItem("role");

  if (!isLoggedIn || !token) {
    return <Navigate to="/login" />; 
  }

  if (role !== "admin") {
    return <Navigate to="/" />; 
  }

  return children; 
};

export default AdminRoute;
