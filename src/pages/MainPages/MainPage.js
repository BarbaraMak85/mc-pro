import React, { Component } from "react";
import CookieInfo from "../../components/CookieInfo/CookieInfo";
import Offer from "../../views/Offer/Offer";
import About from "../../views/About/About";
import Contact from "../../views/Contact/Contact";
import Navbar from "../../components/navigations/Navbar/Navbar";
import Home from "../../views/Home/Home";
import styles from "./MainPages.module.scss";
import ImginesSlider from "../../components/Slider/Slider";

class MainPage extends Component {
  render() {
    return (
      <div>
        <CookieInfo />
        <Navbar />
        <div id="home">
          <Home />
        </div>

        <div id="offer">
          <Offer />
        </div>
        <div id="about">
          <About />
        </div>
        <div>
          <ImginesSlider />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    );
  }
}

export default MainPage;
