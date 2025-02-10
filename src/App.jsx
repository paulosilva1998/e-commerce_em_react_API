import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<ProductList />} />
  <Route path="/products/:id" element={<ProductDetails />} />
  <Route path="/products/edit/:id" element={<EditProduct />} />
  <Route path="/add-product" element={<AddProduct />} />
</Routes>

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;