import React, { Component } from "react";
import Offer from "../../views/Offer/Offer";
import About from "../../views/About/About";
import Contact from "../../views/Contact/Contact";
import Navbar from "../../components/navigations/Navbar/Navbar";
import Home from "../../views/Home/Home";
class MainPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <div id="offer">
          <Offer />
        </div>
        <div id="about">
          <About />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </div>
    );
  }
}

export default MainPage;
