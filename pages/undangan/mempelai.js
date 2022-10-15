import Animated from '../../Components/animated';

const data = {
  ayat: '"And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought"',
  doa: "Dengan memohon Rahmat dan Ridho Illahi, teriring niat menjalankan Sunnah Rasulullah ﷺ untuk membentuk rumah tangga yang Sakinah, Mawaddah wa Rahmah, kami mohon do'a agar senantiasa diberikan kelancaran dan keberkahan."
}

function Mempelai() {

  return (
    <div className="mempelai">
      <Animated className="heading-title">Mempelai</Animated>
      <Animated className="doa">{data.doa}</Animated>
      <Animated><img src="/static/images/mp.jpg" /></Animated>
      <Animated className='mempelainama'>Ahmad Khairul Anwar, ST. </Animated>
      <Animated className='mempelaiortu'>Putra Bapak Bejo Hartanto </Animated>
      <Animated className='mempelaiortu'>{'&'} Ibu Jamilah, S.Pd.I</Animated>
      <Animated className='mempelaiseparator'>{'&'}</Animated>
      <Animated><img src="/static/images/mw.jpg" /></Animated>
      <Animated className='mempelainama'> Shafira Nur Zainal Abidin, S.Pd.</Animated>
      <Animated className='mempelaiortu'>Putri Bapak Eri Nur Zainal Abidin, S.Pd., M.Si </Animated>
      <Animated className='mempelaiortu'>{'&'} Ibu Tuti Rohaeni, S.Pd</Animated>
      <div className='footer' />
    </div>
  )
}

export default Mempelai;


