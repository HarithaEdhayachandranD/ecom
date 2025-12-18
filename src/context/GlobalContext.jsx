import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  /* ================= PRODUCTS ================= */
  const loadProducts = async () => {
    try {
      const res = await fetch("https://backend-1-8ldb.onrender.com/products");
      const data = await res.json();

      if (Array.isArray(data)) {
        setProducts(data);
      } else if (Array.isArray(data.products)) {
        setProducts(data.products);
      } else {
        setProducts([]);
      }
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
        setCart(data.items || []); // ✅ correct cart shape
      } else {
        setCart([]);
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
    alert("Please login again");
    return;
  }

  try {
    const res = await fetch("http://localhost:3001/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token, // ✅ VERY IMPORTANT
      },
      body: JSON.stringify({
        productId: product._id, // ✅ ONLY THIS ID
        quantity: 1,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || "Cart error");
      return;
    }

    alert("Added to cart ✅");
  } catch (err) {
    alert("Server error");
  }
};

  /* ================= ORDERS ================= */
 const loadOrders = async () => {
  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    const res = await fetch("http://localhost:3001/orders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (res.ok) {
      setOrders(data.orders || []);
    } else {
      setOrders([]);
    }
  } catch (err) {
    console.log("Error loading orders:", err);
    setOrders([]);
  }
};
  useEffect(() => {
    loadOrders();
  }, []);

  /* ================= ADMIN ================= */
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
