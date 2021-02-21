import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./globalStyles";

import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData, productDataTwo } from "./components/Products/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favourite' data={productData} />
      <Feature />
      <Products heading='Choose one of our specialies' data={productDataTwo} />
      <Footer />
    </Router>
  );
};

export default App;
