import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import Card from "./Card.jsx";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="max-w-6xl mx-auto mt-24 px-6">
        <h1 className="text-2xl font-bold text-center mb-6">
          Top Products
        </h1>

        <Card limit={3} />

        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/products")}
            className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 rounded-lg text-white font-semibold shadow-md transition"
          >
            View all products
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
