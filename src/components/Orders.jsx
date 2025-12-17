import { useContext, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Orders = () => {
  const { orders, loadOrders } = useContext(GlobalContext);
  const token = localStorage.getItem("token");

  // 🔒 Block without login
  if (!token) {
    return (
      <>
        <Navbar />
        <div className="pt-20 p-10 min-h-screen flex items-center justify-center">
          <h1 className="text-xl font-bold">
            Please login to view orders
          </h1>
        </div>
        <Footer />
      </>
    );
  }

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <>
      <Navbar />

      <div className="pt-20 p-10 min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-6">My Orders</h1>

        {orders.length === 0 && (
          <p className="text-gray-500">
            You have not placed any orders yet.
          </p>
        )}

        {orders.map(order => (
          <div
            key={order._id}
            className="bg-white p-6 mb-6 shadow rounded-lg"
          >
   
            <div className="flex justify-between mb-4 pb-2 border-b">
              <span className="font-semibold">
                Status: {order.status}
              </span>
              <span className="font-bold">
                Total: ₹{order.orderTotal}
              </span>
            </div>

            {/* Products */}
            {order.products.map(item => (
              <div
                key={item._id}
                className="flex justify-between items-center py-3"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.product.image_url}
                    alt={item.product.name}
                    className="w-14 h-14 object-contain bg-white rounded p-1"
                  />

                  <div>
                    <p className="font-medium">
                      {item.product.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      ₹{item.price} × {item.quantity}
                    </p>
                  </div>
                </div>

                <div className="font-semibold">
                  ₹{item.total}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Orders;
