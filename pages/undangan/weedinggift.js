import { useState, useEffect, useRef } from 'react';

import Animated from '../../Components/animated';
import { BsGift, BsFiles } from "react-icons/bs";

function copyToCB(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert(`${text} Berhasil Disalin !`);
    })
    .catch(() => {
      alert(`${text} Gagal Disalin !`);
    });
}

const gift = [
  {
    text: "2430148632",
    description: "BCA a/n Selvia Apriyani",
    copy: "2430148632",
  },
  {
    text: "074901019526506",
    description: "BRI a/n Ahmad Najib F",
    copy: "074901019526506"
  },
  {
    text: "Alamat Pengiriman Hadiah Fisik",
    description: "Komplek Rancaekek Permai 2 Blok B22 No 12, Rt 1 Rw 23, Desa Jelegong, Kec. Rancaekek, Kab. Bandung",
    copy: "Komplek Rancaekek Permai 2 Blok B22 No 12, Rt 1 Rw 23, Desa Jelegong, Kec. Rancaekek, Kab. Bandung"
  }
]
const Weddinggift = () => {
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  }, []);

  return (
    <div style={{ height }}>
      <div className="container weddinggift" ref={ref}>
        <Animated className="heading-title">
          Wedding Gift
        </Animated>
        <Animated className="deskripsi">
          Apabila memberi adalah tanda kasih anda. Anda dapat memberi kado secara cashless atau amplop digital kepada mempelai
        </Animated>
        {gift.map((e, i) => (
          <Animated className="kado" key={i}>
            <p><BsGift color="#ebebeb" size="50px" /></p>
            <p>{e.text}</p>
            <p>{e.description}</p>
            <p><button onClick={() => copyToCB(e.copy)}>
              <BsFiles /> &nbsp; salin
            </button></p>
          </Animated>
        ))}
        <Animated className="thank-you">
          <p>Atas Doa dan Restu dari Bapak/Ibu/Saudara/i</p>
          <p>Kami ucapkan banyak terima kasih</p>
          <p>Kami Yang Berbahagia,</p>
          <p>Najib {'&'} Selvia</p>
        </Animated>
      </div>
      <div className="background-images" style={{ height, bottom: height }} />
    </div>
  )
};

export default Weddinggift;



