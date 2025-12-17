import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, loadCart } = useContext(GlobalContext);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // 🔒 Block cart without login
  if (!token) {
    return (
      <>
        <Navbar />
        <div className="pt-20 p-10 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">
              Please Login to View Cart
            </h1>
            <a
              href="/login"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded no-underline"
            >
              Login
            </a>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // ✅ Place Order handler
  const placeOrder = async () => {
    try {
      const res = await fetch("http://localhost:3001/orders", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok) {
        alert("Order placed successfully");
        loadCart();          // clear cart
        navigate("/orders"); // ➡️ go to orders page
      } else {
        alert(data.error || "Failed to place order");
      }
    } catch (error) {
      console.error("Place order error:", error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="pt-20 p-10 min-h-screen">
        <h1 className="text-2xl font-bold mb-5">Cart</h1>

        {cart.length === 0 && (
          <p className="text-gray-500">Your cart is empty</p>
        )}

        {cart.map(item => (
          <div
            key={item._id}
            className="flex items-center justify-between mb-4 border-b pb-2"
          >
            <img
              src={item.product.image_url}
              alt={item.product.name}
              className="w-20 h-20 object-contain bg-white rounded p-1"
            />

            <div className="flex-1 ml-3">
              <p className="font-bold">{item.product.name}</p>
              <p>₹{item.price}</p>
              <p className="text-sm text-gray-500">
                Quantity: {item.quantity}
              </p>
            </div>
          </div>
        ))}

        {/* ✅ Place Order Button */}
        {cart.length > 0 && (
          <div className="mt-6 text-right">
            <button
              onClick={placeOrder}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
            >
              Place Order
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Cart;
