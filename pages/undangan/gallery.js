import { useState, useEffect, useRef } from 'react';

import Animated from "../../Components/animated";
import Slider from "../../Components/slider";

function Journey() {
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  }, [])

  return (
    <div style={{ height }}>
      <div className="container gallery" ref={ref}>
        <Animated className="heading-title">Gallery</Animated>
        <Animated>
          <Slider>
            {[...Array(10)].map((i, index) => (
              <img key={index} src={`/static/images/gallery (${index + 1}).jpg`} />
            ))}
          </Slider>
        </Animated>
        <div className="footer" />
      </div>
      <div className="background-images-2" style={{ height, bottom: height }} />
    </div>
  )
}

export default Journey;


