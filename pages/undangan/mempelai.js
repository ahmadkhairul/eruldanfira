import { useState, useEffect, useRef } from 'react';
import Animated from '../../Components/animated';

const data = {
  doa: "Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya (Qs. Ar - Rum : 21)"
}

function Mempelai() {
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  }, [])

  return (
    <div style={{ height }}>
      <div className="container mempelai" ref={ref}>
        <Animated className="heading-title">Mempelai</Animated>
        <Animated className="doa">{data.doa}</Animated>
        <Animated><img src="/static/images/mp.jpg" /></Animated>
        <Animated className='mempelainama'>
          Ahmad Najib Fahmi
        </Animated>
        <Animated className='mempelaiortu'>Putra Pertama Bapak Bejo Hartanto </Animated>
        <Animated className='mempelaiortu'>{'&'} Ibu Jamilah, S.Pd.I</Animated>
        <Animated className='mempelaiseparator'>{'&'}</Animated>
        <Animated><img src="/static/images/mw.jpg" /></Animated>
        <Animated className='mempelainama'>
          Selvia Apriyani
        </Animated>
        <Animated className='mempelaiortu'>Putri Pertama Bapak Dudu Rukmana</Animated>
        <Animated className='mempelaiortu'>{'&'} Ibu Siti Aisyah</Animated>
        <div className='footer' />
      </div>
      <div className="background-images-2" style={{ height, bottom: height }} />
    </div>
  )
}

export default Mempelai;


