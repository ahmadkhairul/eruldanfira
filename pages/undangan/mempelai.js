import { useState } from 'react';
import Animated from '../../Components/animated';

const data = {
  ayat: '"And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought"',
  doa: "Dengan memohon Rahmat dan Ridho Illahi, teriring niat menjalankan Sunnah Rasulullah ﷺ untuk membentuk rumah tangga yang Sakinah, Mawaddah wa Rahmah, kami mohon do'a agar senantiasa diberikan kelancaran dan keberkahan."
}

function Mempelai() {

  const [show, setShow] = useState(false);

  return (
    <div className="container mempelai">
      <Animated className="heading-title">Mempelai</Animated>
      <Animated className="doa">{data.doa}</Animated>
      <Animated><img src="/static/images/mp.jpg" /></Animated>
      <Animated className='mempelainama'>
        <a href='https://www.instagram.com/hmadzk/?hl=en' target='_blank'>
          Ahmad Khairul Anwar, S.T.
        </a>
      </Animated>
      <Animated className='mempelaiortu'>Putra Bapak Bejo Hartanto </Animated>
      <Animated className='mempelaiortu'>{'&'} Ibu Jamilah, S.Pd.I</Animated>
      <Animated className='mempelaiseparator'>{'&'}</Animated>
      <Animated><img src="/static/images/mw.jpg" /></Animated>
      <Animated className='mempelainama'>
        <a href='https://www.instagram.com/shafiranzai/?hl=en' target='_blank'>
          {show
            ? 'My Very Very Lovely Shafira ❤'
            : 'Shafira Nur Zainal Abidin, S.Pd.'
          }
        </a>
      </Animated>
      <Animated className='mempelaiortu'>Putri Bapak Eri Nur Zainal Abidin, S.Pd., M.Si</Animated>
      <Animated className='mempelaiortu'>{'('} Ketua KKKS Kecamatan Cisolok {')'}</Animated>
      <Animated className='mempelaiortu'>{'&'} Ibu Tuti Rohaeni, S.Pd</Animated>
      <Animated className='mempelaiortu'>{'('} Kepala SD Negeri 1 Cipatat {')'}</Animated>
      <div
        onClick={() => setShow(!show)}
        style={{ color: show ? 'white' : '#a3d5df', cursor: 'pointer' }}
      >
        show me!! Fira name in Erul contact hehe
      </div>
      <div className='footer' />
    </div>
  )
}

export default Mempelai;


