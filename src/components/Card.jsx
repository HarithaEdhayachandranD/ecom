import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const Card = ({ limit, useCart = false }) => {
  const { products, cart } = useContext(GlobalContext);

  // Decide what to display: top products or cart items
  const items = useCart ? cart : products;
  const displayItems = limit ? (items || []).slice(0, limit) : (items || []);

  if (!displayItems || displayItems.length === 0) {
    return <p className="text-center mt-5">No products available 😢</p>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-10 mt-5">
      {displayItems.map((item) => (
        <div key={item.id} className="bg-gray-200 p-4 rounded shadow w-60">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover rounded"
          />
          <h2 className="font-bold mt-2">{item.name}</h2>
          <p className="text-lg">₹{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
