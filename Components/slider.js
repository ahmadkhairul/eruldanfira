import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="nextbtn" onClick={onClick}>
      <GrFormPrevious className="icon" size="50px" />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="prevbtn" onClick={onClick}>
      <GrFormNext className="icon" size="50px" />
    </div>
  );
}

function Carousel(props) {
  const { children, className } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <Slider className={className} {...settings}>
      {children}
    </Slider>
  )
}

export default Carousel;