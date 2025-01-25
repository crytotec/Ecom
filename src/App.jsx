import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Section from "./Section";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Signin from "./Signin";
import SignUp from "./SignUp";
import Cart from "./Cart";
import About from "./About"
import Contact from "./Contact"
import { AuthProvider } from './AuthContext'; 

function AppContent({ cart, updateCart }) {
  const location = useLocation();
  const isSigninPage = location.pathname === "/" || location.pathname === '/SignUp';

  return (
    <>
      {!isSigninPage && <Navbar cart={cart} />}
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} /> 
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Home" element={<Section updateCart={updateCart} />} />
        <Route path="/cart" element={<Cart cart={cart} updateCart={updateCart} />} />
      </Routes>
      {!isSigninPage && <Footer />}
    </>
  );
}

export default function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    try {
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error parsing cart from localStorage:", error);
      return [];
    }
  });

  const updateCart = (product) => {
    if (product) {
      if (product.remove) {
        // Remove product from cart
        setCart((prev) => prev.filter((item) => item.id !== product.id));
      } else if (product.increment) {
        // Increment product quantity
        setCart((prev) => {
          const existingProductIndex = prev.findIndex((item) => item.id === product.id);
          if (existingProductIndex > -1) {
            const updatedCart = [...prev];
            updatedCart[existingProductIndex].quantity += 1; // Increment by 1
            return updatedCart;
          } else {
            return [...prev, { ...product, quantity: 1 }]; // Add new product with quantity 1
          }
        });
      } else if (product.decrement) {
        // Decrement product quantity
        setCart((prev) => {
          const existingProductIndex = prev.findIndex((item) => item.id === product.id);
          if (existingProductIndex > -1) {
            const updatedCart = [...prev];
            if (updatedCart[existingProductIndex].quantity > 1) {
              updatedCart[existingProductIndex].quantity -= 1; // Decrement by 1
            } else {
              return prev.filter((item) => item.id !== product.id); // Remove product if quantity is 1
            }
            return updatedCart;
          }
          return prev; // Return previous state if product not found
        });
      } else {
        // Default case: Add product to cart
        setCart((prev) => {
          const existingProductIndex = prev.findIndex((item) => item.id === product.id);
          if (existingProductIndex > -1) {
            const updatedCart = [...prev];
            updatedCart[existingProductIndex].quantity += 1; // Increment by 1
            return updatedCart;
          } else {
            return [...prev, { ...product, quantity: 1 }]; // Add new product with quantity 1
          }
        });
      }
    } else {
      console.error("Error: No product specified for addition or removal.");
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <AuthProvider>
      <Router>
        <AppContent cart={cart} updateCart={updateCart} />
      </Router>
    </AuthProvider>
  );
}