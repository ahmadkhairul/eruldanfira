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
    text: "10987654321",
    description: "a/n Shafira Nur Zainal Abidin",
    copy: "10987654321",
  },
  {
    text: "12345678910",
    description: "a/n Ahmad Khairul Anwar",
    copy: "12345678910"
  },
  {
    text: "Alamat Pengiriman Hadiah Fisik",
    description: "KP. NAGRAK RT 03/RW 04 DESA CIKELAT, KEC CISOLOK, KAB. SUKABUMI, JAWA BARAT 43366 (DEPAN BALAI DESA CIKELAT)",
    copy: "KP. NAGRAK RT 03/RW 04 DESA CIKELAT, KEC CISOLOK, KAB. SUKABUMI, JAWA BARAT 43366 (DEPAN BALAI DESA CIKELAT)"
  }
]
const Weddinggift = () => {

  return (
    <div className="container weddinggift">
      <Animated className="heading-title">
        Wedding Gift
      </Animated>
      <Animated className="deskripsi">
        Tanpa mengurangi rasa hormat, bagi keluarga, sahabat, dan rekan yang ingin memberikan tanda kasih untuk kami, dapat melalui :
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
        <p>Khairul {'&'} Shafira</p>
      </Animated>
    </div>
  )
};

export default Weddinggift;



