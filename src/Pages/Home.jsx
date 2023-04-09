import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
function Home() {
  return (
    <div className="home">
      <Hero />
      <Footer />
    </div>
  );
}

export default Home;