import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import Layout from "./Layout";

const Products = () => {
  const { products, addToCart } = useContext(GlobalContext);

  console.log("PRODUCTS FROM CONTEXT 👉", products);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl border border-slate-200 px-8 py-10 mt-10">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-10 text-center">
          Products
        </h1>

        {products.length === 0 ? (
          <p className="text-center text-slate-500 text-lg">
            No products available
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((p, index) => (
              <div
                key={p._id || index}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm"
              >
                {/* IMAGE */}
                <img
                  src={
                    p.image_url && p.image_url.startsWith("http")
                      ? p.image_url
                      : "https://picsum.photos/300/200"
                  }
                  alt={p.name}
                  className="w-full h-40 object-contain bg-gray-100 rounded-lg mb-4 p-2"
                />

                {/* NAME */}
                <h2 className="font-bold text-lg text-slate-800">
                  {p.name}
                </h2>

                {/* PRICE */}
                <p className="text-green-600 font-semibold mt-1">
                  ₹{p.selling_price ?? p.price ?? "N/A"}
                </p>

                {/* BUTTON */}
                <button
                  className="mt-5 w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-md"
                  onClick={() => addToCart(p)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Products;
