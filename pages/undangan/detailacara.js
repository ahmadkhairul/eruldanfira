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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d700.11278679581!2d106.47723081124568!3d-6.957785730039542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4283253db7d975%3A0x489b8dc14c0df6f7!2sKopdit%20Subur%20Pgri%20Cisolok!5e0!3m2!1sen!2sid!4v1673176776258!5m2!1sen!2sid"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
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
          Kopdit Subur PGRI Cisolok<br />
          Jl. Cirenik, Karangpapak,<br />
          Kec. Cisolok, Kabupaten Sukabumi, Jawa Barat
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
          11:00 - 15:00 WIB
        </Animated>
      </div>
    </div>
  )
};

export default LocationMap;


