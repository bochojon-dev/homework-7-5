import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Products from "../../components/products/Products";
import axios from "../../api";

const Home = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Products data={products} />
    </div>
  );
};

export default Home;
