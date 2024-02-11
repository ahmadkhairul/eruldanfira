import { useState, useEffect, useRef } from 'react';
import Animated from '../../Components/animated';

const LocationMap = () => {
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  }, [])

  return (
    <div style={{ height }}>
      <div className="container mapcontainer" ref={ref}>
        <Animated className="heading-title">
          Detail Acara
        </Animated>
        <Animated className="mapouter">
          <a href="https://goo.gl/maps/bE73qygUydaAXJWC7" target="_blank">
            <img src="/static/images/map.png" />
          </a>
          <br />
        </Animated>
        <div className="content">
          <Animated className="title">
            Lokasi
          </Animated>
          <Animated className="deskripsi">
            Komplek Rancaekek Permai 2 Blok B22 No 12,
            Rt 1 Rw 23, Desa Jelegong, <br />
            Kec. Rancaekek, Kab. Bandung <br />
            <a href="https://goo.gl/maps/bE73qygUydaAXJWC7" target="_blank">
              <p style={{
                textDecorationLine: "underline",
                textUnderlineOffset: "5px",
                weight: "700",
                fontSize: "18px"
              }}>
                detail lokasi click disini
              </p>
            </a>
          </Animated>
          <Animated className="title">
            Akad Nikah
          </Animated>
          <Animated className="tanggal">
            08:00 - 09:00 WIB
          </Animated>
          <Animated className="title">
            Acara Resepsi
          </Animated>
          <Animated className="tanggal">
            11:00 - 15:00 WIB
          </Animated>
        </div>
      </div>
      <div className="background-images-3" style={{ height, bottom: height }} />
    </div>
  )
};

export default LocationMap;


