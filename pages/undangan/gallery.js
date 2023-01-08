import Animated from "../../Components/animated";
import Slider from "../../Components/slider";

function Journey() {
  return (
    <div className="container gallery">
      <Animated className="heading-title">Gallery</Animated>
      <Animated>
        <Slider>
          {[...Array(4)].map((i, index) => (
            <img key={index} src={`/static/images/gallery-3.jpg`} />
          ))}
        </Slider>
      </Animated>
      <div className="footer" />
    </div>
  )
}

export default Journey;


