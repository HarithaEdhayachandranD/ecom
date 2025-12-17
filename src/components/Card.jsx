import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const Card = ({ limit, useCart = false }) => {
  const { products, cart } = useContext(GlobalContext);

  // Choose source: products or cart
  const items = useCart ? cart : products;
  const displayItems = limit ? items.slice(0, limit) : items;

  if (!displayItems || displayItems.length === 0) {
    return <p className="text-center mt-5">No products available 😢</p>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-10 mt-5">
      {displayItems.map((item, index) => (
        <div
          key={item._id || item.product_id || index}
          className="bg-gray-200 p-4 rounded shadow w-60"
        >
          {/* IMAGE */}
          <img
            src={
              item.image_url && item.image_url.startsWith("http")
                ? item.image_url
                : "https://picsum.photos/300/200"
            }
            alt={item.name}
            className="w-full h-48 object-contain bg-white rounded"
          />

          {/* NAME */}
          <h2 className="font-bold mt-2 text-center">
            {item.name}
          </h2>

          {/* PRICE */}
          <p className="text-lg text-center font-semibold">
            ₹{item.selling_price ?? item.price ?? "N/A"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Card;
