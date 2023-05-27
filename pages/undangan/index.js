import { useEffect, useState } from 'react';
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
            backgroundColor: '#a3d5df',
            padding: '20px 10px 10px 10px',
            borderRadius: '18px',
            border: '4px solid white',
          }}
          onClick={() => setModal(!modal)}
        >
          <p>Organisasi Kesehatan Dunia secara resmi mengumumkan berakhirnya pandemi global Covid-19 pada Jumat 5 Mei 2023.</p>
          <p>Namun, virus ini masih beredar dan mematikan sehingga protokol kesehatan harus tetap dijalankan.</p>
          <p
            style={{
              textDecoration: 'underline',
              cursor: 'pointer'
            }}
          >Baiklah, Saya Mengerti</p>
          <p
            style={{
              cursor: 'pointer',
              color: '#a3d5df',
            }}
          >Tidak, Saya Tidak Mengerti {'>'}:{'('}</p>
        </div>
      </div>
    </>
  )
}
function Component() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(true);

  const fetchData = async () => {
    const { data: { entriesData } } = await axios.get('/api/message/message');
    setData(entriesData)
    setLoading(false)
  }

  useEffect(() => {
    document.title = 'Ahmad Khairul A ❤️ Shafira Nur ZA Wedding';
    fetchData()
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
          <div className="container message">
            <Animated className="heading-title">
              Doa dan Ucapan <br /> dari Undangan
            </Animated>
            {loading
              ? <Animated className='guestmessagecontainer'>
                <p>sedang memuat ...</p>
              </Animated>
              : <List entriesData={data} />}
          </div>
          <Weddinggift />
          <div className="footer">
            <small>&copy; 2023 Created by Khairul with lots of 🤎 for Shafira.</small>
            <small>
              Song by{' '}
              <a href="https://www.youtube.com/watch?v=cjaW3edHhHA" target="_blank" rel="noreferrer">
                Howl {'&'} J - Perhaps Love
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