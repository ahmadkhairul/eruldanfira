import { useState } from 'react';
import Animated from '../../Components/animated';

export const stories = [
  {
    title: <a href="https://www.instagram.com/p/BfvgyKLHSDl/?hl=en" target="_blank">Pertemuan & Perkenalan</a>,
    date: 'Februari 2018',
    description: 'Kami berkenalan dan dipertemukan untuk pertama kali di sebuah festival di Bandung. Namun saat itu hubungan kami hanya sebatas teman yang jarang berkomunikasi.',
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
    title: 'Lamaran',
    date: 'Desember 2022',
    description: 'Hingga akhirnya pada Bulan Desember 2022, untuk menunjukkan keseriusan maka kami pertemukan kedua keluarga kami pada acara lamaran di tanggal 08 Desember 2022',
  },
  {
    title: 'Pernikahan',
    date: 'Juni 2023',
    description: 'Alhamdulillah pernikahan kami InsyaAllah akan dilaksanakan pada tanggal 24 Juni 2023. Semoga Allah selalu melindungi kami, memberikan keluarga kami keberkahan serta keturunan sholeh-sholehah dan diberikan rezeki yang melimpah Aamiin'
  }
];

function Journey() {

  const [show, setShow] = useState(false);

  return (
    <div className="container journey">
      <Animated className="heading-title">Our Love Story</Animated>
      {stories.map((i, index) => (
        <Animated key={index}>
          <section className='title'>{i.title}</section>
          <section className='tanggal'>{i.date}</section>
          <section className='deskripsi'>{i.description}</section>
        </Animated>
      ))}
      <div
        onClick={() => setShow(!show)}
        style={{ color: show ? 'white' : '#a3d5df', cursor: 'pointer' }}
      >
        After Story ❤
      </div>
      {show
        ? <Animated>
          <section className='title'>Rencana Kami</section>
          <section className='tanggal'>After Marriage</section>
          <section className='deskripsi'>Kami akan tinggal selama seminggu di rumah orang tua Shafira untuk melaksanakann Lebaran pertama kami sebagai suami istri. <br /><br /> Kemudian, kami akan pindah ke rumah kami di Sumedang yang telah dipersiapkan sejak 2 tahun yang lalu. <br /><br /> Setelah itu, kami akan ke rumah orang tua Khairul, menginap selama seminggu untuk mempersiapkan acara pengajian dirumah kami. <br /><br /> Pengajian di dilaksanakan secara sederhana di rumah kami dengan mengundang pak RT dan pak RW. <br /><br /> Setelah itu, kami akan refreshing ke Lembang sejenak untuk kemudian melaksanakan acara syukuran di rumah paman Shafira dengan mengundang teman-teman kami yang tinggal di bandung yang tidak bisa datang di hari pernikahan kami di Pelabuhan Ratu. <br /><br /> Setelah itu, kami akan honeymoon ke Seaworld di Jakarta yeayy! <br /><br /> Semoga kami selalu bersama saling mencintai dan menyayangi hingga maut memisahkan. </section>
        </Animated>
        : ''
      }
      <div className='footer' />
    </div>
  )
}

export default Journey;


