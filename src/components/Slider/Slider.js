import React from "react";
import Slider from "react-slick";
import styles from "./Slider.module.scss";
import Box from "../../components/Box/Box";

function ImginesSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    // <Slider {...settings}>
    //   <div className={styles.cardWrapper}>
    //     <div className={styles.card}>
    //       <div className={styles.cardImage}></div>
    //       <div>
    //         <div>
    //           <h3>1</h3>
    //         </div>
    //         <div>
    //           <h3>2</h3>
    //         </div>
    //         <div>
    //           <h3>3</h3>
    //         </div>
    //         <div>
    //           <h3>4</h3>
    //         </div>
    //         <div>
    //           <h3>5</h3>
    //         </div>
    //         <div>
    //           <h3>6</h3>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Slider>
    <Slider {...settings}></Slider>
  );
}

export default ImginesSlider;
