import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Products = () => {
  const { products, addToCart } = useContext(GlobalContext);

  return (
    <>
      <Navbar />

      <div className="pt-20 p-10 min-h-screen bg-gray-900">
        <h1 className="text-2xl font-bold mb-5 text-white">Products</h1>

        <div className="grid grid-cols-3 gap-5">
          {products.map((p) => (
            <div
              key={p.product_id}
              className="bg-gray-800 text-white p-5 rounded shadow-lg"
            >
              <img
                src={p.image_url || "https://picsum.photos/300/200"}
                alt={p.name}
                className="w-full h-40 object-contain bg-white rounded mb-3 p-2"
              />

              <h2 className="font-bold text-lg">{p.name}</h2>

              <p className="text-green-400 text-lg mt-1 font-semibold">
                ₹{p.selling_price}
              </p>

              <button
                className="mt-3 bg-green-500 hover:bg-green-600 px-3 py-1 rounded"
                onClick={() => addToCart(p)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;
