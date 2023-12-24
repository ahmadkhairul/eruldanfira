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
          <div className="gmap_canvas">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d832.54359846814!2d107.7716220463638!3d-6.977780810278084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1703396215037!5m2!1sen!2sid"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
            <br />
          </div>
        </Animated>
        <div className="content">
          <Animated className="title">
            Lokasi
          </Animated>
          <Animated className="deskripsi">
            Komplek Rancaekek Permai 2 Blok B22 No 12,
            Rt 1 Rw 23, Desa Jelegong, <br />
            Kec. Rancaekek, Kab. Bandung
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
            10:30 - 15:00 WIB
          </Animated>
        </div>
      </div>
      <div className="background-images-3" style={{ height, bottom: height }} />
    </div>
  )
};

export default LocationMap;


