import { useState, useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Admin = () => {
  const { addProduct } = useContext(GlobalContext);

  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.image) return alert("All fields required");

    addProduct({
      name: form.name,
      price: parseInt(form.price),
      image: form.image,
    });

    setForm({ name: "", price: "", image: "" });
    alert("Product added successfully!");
  };

  return (
    <>
      <Navbar />
      <div className="pt-20 p-10 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Add Product</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-[300px]">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            className="border p-2 rounded"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="border p-2 rounded"
            value={form.price}
            onChange={handleChange}
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            className="border p-2 rounded"
            value={form.image}
            onChange={handleChange}
          />
          <button type="submit" className="bg-green-400 p-2 rounded text-white">
            Add Product
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
