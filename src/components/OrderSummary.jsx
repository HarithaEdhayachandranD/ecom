import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const OrderSummary = () => {
  const { cart } = useContext(GlobalContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="w-[400px] bg-gray-800 p-5 rounded-md shadow-lg ml-10 text-white">
      <h2 className="text-xl font-bold mb-3">Order Summary</h2>
      <p>Items in Cart: {totalItems}</p>
      <p>Shipping : 50</p>
      <p>Total Price: ₹{totalPrice}</p>
      
      <button className="mt-30 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
  Proceed to Pay
</button>

    </div>
  );
};

export default OrderSummary;
