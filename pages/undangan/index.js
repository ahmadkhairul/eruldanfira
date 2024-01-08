import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

import Animated from '../../Components/animated';
import FloatingMusic from '../../Components/playmusic';

import SaveTheDate from './savethedate';
import Mempelai from './mempelai';
import Add from './doadanucapan';
import List from './doadanucapandariundangan';
import Journey from './ourlovestory';
import LocationMap from './detailacara';
import Gallery from './gallery';
import Weddinggift from './weedinggift';

function Modal({ modal, setModal }) {
  return (
    <>
      <div
        style={{
          zIndex: 99,
          width: '100vw',
          height: '100vh',
          opacity: 0.5,
          position: 'fixed',
          backgroundColor: '#848282',
        }}
      >
      </div>
      <div
        style={{
          zIndex: 100,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'fixed'
        }}
      >
        <div
          style={{
            width: '300px',
            backgroundColor: 'hotpink',
            padding: '20px 10px 10px 10px',
            borderRadius: '18px',
            border: '4px solid white',
          }}
          onClick={() => setModal(!modal)}
        >
          <p>World Health Organization {'('}WHO{')'} secara resmi mengumumkan berakhirnya pandemi global Covid-19 pada Jumat 5 Mei 2023.</p>
          <p>Namun, virus ini masih beredar dan mematikan sehingga protokol kesehatan harus tetap dijalankan.</p>
          <p
            style={{
              textDecoration: 'underline',
              cursor: 'pointer'
            }}
          >Baiklah, Saya Mengerti</p>
        </div>
      </div>
    </>
  )
}
function Component() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(true);

  const [height, setHeight] = useState(0);
  const ref = useRef(null)

  const fetchData = async () => {
    const { data: { entriesData } } = await axios.get('/api/message/message');
    setData(entriesData)
    setLoading(false)
  }

  useEffect(() => {
    document.title = 'Najib ❤️ Selvia';
    fetchData();
    setHeight(ref.current.clientHeight);
  }, [])

  return (
    <>
      {modal ? <Modal modal={modal} setModal={setModal} /> : ''}
      <main>
        <section>
          <SaveTheDate />
          <Mempelai />
          <LocationMap />
          <Journey />
          <Gallery />
          <Add fetchData={fetchData} />
          <div style={{ height }}>
            <div className="container message" ref={ref}>
              <Animated className="heading-title">
                Doa dan Ucapan <br /> dari Undangan
              </Animated>
              {loading
                ? <Animated className='guestmessagecontainer'>
                  <p>sedang memuat ...</p>
                </Animated>
                : <List entriesData={data} />}
            </div>
            <div className="background-images-3" style={{ height, bottom: height }} />
          </div>
          <Weddinggift />
          <div className="footer">
            <small>&copy; 2024 Created by Khairul with 🤎 for Najib and Selvia.</small>
            <small>
              Song by{' '}
              <a href="https://www.youtube.com/watch?v=1Ej3InS5FEM" target="_blank" rel="noreferrer">
                "Marry Your Daughter" - Brian McKnight Jr.
              </a>
            </small>
          </div>
        </section>
        <FloatingMusic />
      </main>
    </>
  )
}

export default Component;