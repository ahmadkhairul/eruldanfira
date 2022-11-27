import Animated from '../../Components/animated';

const LocationMap = () => {

  return (
    <div className="container mapcontainer">
      <Animated className="heading-title">
        Detail Acara
      </Animated>
      <Animated className="mapouter">
        <div className="gmap_canvas">
          <iframe
            src="https://maps.google.com/maps?q=balai%20desa%20cikelat&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0">
          </iframe>
          <br />
        </div>
      </Animated>
      <div className="content">
        <Animated className="title">
          Lokasi
        </Animated>
        <Animated className="deskripsi">
          Balai Desa Cikelat<br />
          Kp. Nagrak RT 03/RW 04 Desa Cikelat,<br />
          Kec Cisolok, Kab. Sukabumi, Jawa Barat
        </Animated>
        <Animated className="title">
          Akad Nikah
        </Animated>
        <Animated className="tanggal">
          09:00 - 10:30 WIB
        </Animated>
        <Animated className="title">
          Acara Resepsi
        </Animated>
        <Animated className="tanggal">
          11:00 - 14:30 WIB
        </Animated>
      </div>
    </div>
  )
};

export default LocationMap;


