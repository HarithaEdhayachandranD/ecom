import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <h1 className="text-2xl font-bold mt-24 text-center">Top Products</h1>

      <Card limit={3} />

      <div className="flex justify-center mt-6">
        <a
          href="/products"
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg mt-4 text-white no-underline inline-block"
        >
          View all products
        </a>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
