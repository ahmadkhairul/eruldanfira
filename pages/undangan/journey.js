import Animated from '../../Components/animated';

export const stories = [
  {
    title: 'Pertemuan & Perkenalan',
    date: 'Februari 2018',
    description: 'Kami berkenalan dan dipertemukan untuk pertama kali di sebuah event Jepang di Bandung. Namun saat itu hubungan kami hanya sebatas teman yang jarang berkomunikasi.',
  },
  {
    title: 'Mengikat Janji',
    date: 'November 2021',
    description: 'Setelah memulai pendekatan selama beberapa bulan, akhirnya pada bulan November 2021 kami mulai berkomitmen untuk menjalin suatu hubungan yang serius.',
  },
  {
    title: 'Menjalin Cinta',
    date: 'Januari 2022',
    description: 'Setelah menjalani LDR selama beberapa bulan, akhirnya kita bisa bertemu di Bandung. Hubungan kami tidak sepenuhnya mulus, pahit manis dalam hubungan kami lewati bersama.',
  },
  {
    title: 'Kesungguhan',
    date: 'November 2022',
    description: 'Anniversary 1 tahun',
  },
  {
    title: 'Memastikan Masa Depan',
    date: 'Desember 2022',
    description: 'Hingga akhirnya pada Bulan Desember 2022, untuk menunjukkan keseriusan maka kami pertemukan kedua keluarga kami pada acara lamaran di tanggal ..., hingga ditetapkan acara pernikahan pada tanggal ...',
  },
];

function Journey() {

  return (
    <div className="journey">
      <Animated className="heading-title">Our Love Story</Animated>
      {stories.map((i, index) => (
        <Animated className="container-journey" key={index}>
          <section className='title'>{i.title}</section>
          <section className='tanggal'>{i.date}</section>
          <section className='deskripsi'>{i.description}</section>
        </Animated>
      ))}
      <div className='footer' />
    </div>
  )
}

export default Journey;


