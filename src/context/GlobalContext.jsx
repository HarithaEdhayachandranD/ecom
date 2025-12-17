import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  /* ================= PRODUCTS ================= */
  const loadProducts = async () => {
    try {
      const res = await fetch("http://localhost:3001/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.log("Error loading products:", err);
      setProducts([]);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  /* ================= CART ================= */
  const loadCart = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setCart([]);
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setCart(data.cart ? data.cart.products : []);
      }
    } catch (err) {
      console.log("Error loading cart:", err);
      setCart([]);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const addToCart = async (product) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to add items to cart");
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          product_id: Number(product.product_id), // ✅ FIXED
          quantity: Number(1),                    // ✅ FIXED
        }),
      });

      const data = await res.json();

      if (res.ok) {
        loadCart();
      } else {
        alert(data.error || "Add to cart failed");
      }
    } catch (err) {
      console.log("Error adding to cart:", err);
    }
  };

  /* ================= ORDERS ================= */
  const loadOrders = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setOrders([]);
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setOrders(data.orders);
      }
    } catch (err) {
      console.log("Error loading orders:", err);
      setOrders([]);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  /* ================= ADMIN (OPTIONAL) ================= */
  const addProduct = async (product) => {
    const token = localStorage.getItem("token");

    await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
      body: JSON.stringify(product),
    });

    loadProducts();
  };

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:3001/products/${id}`, {
      method: "DELETE",
    });
    loadProducts();
  };

  return (
    <GlobalContext.Provider
      value={{
        products,
        cart,
        orders,
        addToCart,
        loadCart,
        loadOrders,
        addProduct,
        deleteProduct,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
