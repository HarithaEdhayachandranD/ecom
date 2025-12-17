import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div id="nav" className="fixed top-0 left-0 w-full z-50 flex justify-between p-6 bg-gray-900 text-white">
      <a href="/" className="bg-gray-300 text-black px-3 py-1 rounded-md font-bold cursor-pointer hover:bg-gray-400 no-underline">
        Lily
      </a>

      <div className="flex gap-6">
        <a href="/products" className="bg-slate-300 text-black px-3 py-1 rounded-lg cursor-pointer hover:bg-slate-400 no-underline">
          Products
        </a>
        <a href="/about" className="bg-slate-300 text-black px-3 py-1 rounded-lg cursor-pointer hover:bg-slate-400 no-underline">
          About
        </a>
        <a href="/contact" className="bg-slate-300 text-black px-3 py-1 rounded-lg cursor-pointer hover:bg-slate-400 no-underline">
          Contact
        </a>
      </div>

      <div className="flex gap-4">
        <a href="/cart" className="bg-slate-300 text-black px-3 py-1 rounded-lg cursor-pointer hover:bg-slate-400 no-underline">
          Cart
        </a>
        <a href="/orders" className="bg-slate-300 text-black px-3 py-1 rounded-lg cursor-pointer hover:bg-slate-400 no-underline">
          Orders
        </a>
        
        <button className="bg-red-500 text-white px-3 py-1 rounded-lg cursor-pointer hover:bg-red-600" onClick={() => {
          localStorage.removeItem('token');
          localStorage.removeItem('userEmail');
          sessionStorage.removeItem('isLoggedIn');
          sessionStorage.removeItem('role');
          navigate('/login');
        }}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
