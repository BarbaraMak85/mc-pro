import React from "react";

import styles from "./Offer.module.scss";
import LineOne from "../../assets/images/line_2.png";
import LineTwo from "../../assets/images/line_3.png";
import Box from "../../components/Box/Box";
import { offerDetailsData } from "../../data/offerDetailsData";
import Slider from "react-slick";
// import sliderStyles from "../../components/Slider/Slider.module.scss";

const Offer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    useCSS: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          arrows: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.offerWrapper}>
      <h1 className={styles.aboutName}>Oferta</h1>
      <p className={styles.homeParagraph}>
        Mamy kilkuletnie doświadczenie w realizacji kampanii marketingowych.
        Cenimy sobie czas naszych klientów, dlatego stawiamy na szybkość i
        skuteczność działania oraz na mierzalne efekty.
      </p>

      <div className={styles.offerWrapperLine}>
        <div className={styles.offerWrapperLineTwo}>
          <div className={styles.box}>
            {/* <ul className={styles.offerBox}> */}
            <Slider {...settings}>
              {offerDetailsData.map((item) => {
                return (
                  <div>
                    <Box {...item} />
                  </div>
                );
              })}
            </Slider>
            {/* </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
