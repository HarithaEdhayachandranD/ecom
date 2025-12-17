import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-indigo-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <span
          onClick={() => navigate("/")}
          className="text-xl font-extrabold cursor-pointer"
        >
          Lily
        </span>

        {/* Middle links */}
        <div className="flex gap-6">
          <button
            onClick={() => navigate("/products")}
            className="font-medium hover:text-indigo-200 transition"
          >
            Products
          </button>

          <button
            onClick={() => navigate("/about")}
            className="font-medium hover:text-indigo-200 transition"
          >
            About
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="font-medium hover:text-indigo-200 transition"
          >
            Contact
          </button>
        </div>

        {/* Right side */}
        <div className="flex gap-4 items-center">
          <button
            onClick={() => navigate("/cart")}
            className="font-medium hover:text-indigo-200 transition"
          >
            Cart
          </button>

          <button
            onClick={() => navigate("/orders")}
            className="font-medium hover:text-indigo-200 transition"
          >
            Orders
          </button>

          {/* Logout button */}
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg font-semibold transition"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("userEmail");
              sessionStorage.removeItem("isLoggedIn");
              sessionStorage.removeItem("role");
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
