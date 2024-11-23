import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
      <Carousel/>
      </div>
      <div className="m-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <Link
              to="/"
              className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            ></Link>
            <span className="mb-3 mb-md-0 text-body-secondary">
              © 2024 ChaiAurCode, Inc
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex"></ul>
        </footer>
      </div>
    </div>
  );
};

export default Home;
