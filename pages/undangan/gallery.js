import Animated from "../../Components/animated";

function Journey() {

  return (
    <div className="container gallery">
      <Animated className="heading-title">Gallery</Animated>
      {[...Array(4)].map((i, index) => (
        <Animated key={index}>
          <img src={`/static/images/gallery-3.jpg`} />
        </Animated>
      ))}
      <div className="footer" />
    </div>
  )
}

export default Journey;


