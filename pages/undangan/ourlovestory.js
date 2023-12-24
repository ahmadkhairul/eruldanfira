import { useState, useEffect, useRef } from 'react';
import Animated from '../../Components/animated';

export const stories = [
  {
    title: 'Awal Pertemuan & Perkenalan',
    date: 'Tahun 2013',
  },
  {
    title: 'Berkomitmen',
    date: 'April 2022',
  },
  {
    title: 'Lamaran',
    date: 'November 2022',
  },
  {
    title: 'Pernikahan',
    date: '18 Februari 2024',
  }
];

function Journey() {
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  }, [])

  return (
    <div style={{ height }}>
      <div className="container journey" ref={ref}>
        <Animated className="heading-title">Our Love Story</Animated>
        {stories.map((i, index) => (
          <Animated key={index}>
            <section className='title'>{i.date}</section>
            <section className='tanggal'>{i.title}</section>
          </Animated>
        ))}
        <div className='footer' />
      </div>
      <div className="background-images" style={{ height, bottom: height }} />
    </div>
  )
}

export default Journey;


