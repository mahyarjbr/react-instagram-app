import React from "react";
import "../style/cardImage.scss";
import Slider from "react-slick";

const CardImage = (props) => {
  const { images } = props;
 

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      {images ? (
        <div className="cardImage">
          <Slider {...settings}>
            {images.map((item) => (
              <div>
                <img key={item.id} src={item.src} alt="card " />
              </div>
            ))}
          </Slider>
        </div>
      ) : null}
    </>
  );
};

export default CardImage;
