import { useEffect, useState } from 'react';
import axios from 'axios';

import Animated from '../../Components/animated';
import FloatingMusic from '../../Components/playmusic';

import SaveTheDate from './savethedate';
import Mempelai from './mempelai';
import Add from './add';
import List from './list';
import Journey from './journey';

function Component() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const { data: { entriesData } } = await axios.get('/api/message/message');
    setData(entriesData)
    setLoading(false)
  }

  useEffect(() => {
    document.title = 'Erul ❤️ Fia Wedding';
    fetchData()
  }, [])

  return (
    <main>
      <section>
        <SaveTheDate />
        <Mempelai />
        <Journey />
        <Add fetchData={fetchData} />
        <div className="guest">
          <Animated className="heading-title">
            Doa dan Ucapan
          </Animated>
          <Animated className="heading-subtitle">
            dari undangan
          </Animated>
          {loading
            ? <Animated>sedang memuat ...'</Animated>
            : <List entriesData={data} />
          }
        </div>
        <div className="footer">
          <small className="block">&copy; 2022 Created by Khairul with lots of 🤎 for Fira.</small>
          <small className="block">
            Song by{' '}
            <a href="https://www.youtube.com/watch?v=JTfYmOwgpfY" target="_blank" rel="noreferrer">
              HowL {'&'} J - Perhaps Love
            </a>
          </small>
        </div>
        <div className="footer" />
        <div className="footer" />
      </section>
      <FloatingMusic />
    </main>
  )
}

export default Component;