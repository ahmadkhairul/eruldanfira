import { useState, useEffect, useRef } from 'react';

import axios from 'axios';
import Animated from '../../Components/animated';

function SendMessages(props) {
  const { fetchData } = props;
  const [nama, setNama] = useState('');
  const [pesan, setPesan] = useState('');
  const [presence, setPresence] = useState('hadir');
  const [message, setMessage] = useState('');

  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  const handleSubmit = async () => {
    const body = {
      name: nama,
      message: pesan,
      presence,
    }
    try {
      await axios.post('/api/message', body);
      setNama('');
      setPesan('');
      fetchData();
      setMessage('pesan berhasil terkirim ...')
    } catch (e) {
      setMessage('terjadi kesalahan pesan gagal terkirim ...')
    }
  }

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  }, [])

  return (
    <div style={{ height }}>
      <div className="container message" ref={ref}>
        <Animated className="heading-title">
          Doa dan Ucapan
        </Animated>
        <Animated className="form-container">
          <label htmlFor="nama">Nama :</label>
          <input
            name='nama'
            minLength={3}
            maxLength={100}
            type='text'
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </Animated>
        <Animated className="form-container">
          <label htmlFor="pesan">Pesan untuk mempelai :</label>
          <textarea
            name='pesan'
            type='text'
            onChange={(e) => setPesan(e.target.value)}
            value={pesan}
            maxLength={250}
          />
        </Animated>
        <Animated className="form-container">
          <label htmlFor='presence'>Konfirmasi kehadiran :</label>
          <select
            name='presence'
            value={presence}
            onChange={(e) => setPresence(e.target.value)}
          >
            <option value={'hadir'}>Hadir</option>
            <option value={'tidak hadir'}>Tidak Hadir</option>
          </select>
        </Animated>
        <Animated className="form-container">
          <button disabled={message} onClick={handleSubmit}>
            Kirim
          </button>
        </Animated>
        <Animated className="form-container">
          <p style={{ height: '20px' }}>{message}</p>
        </Animated>
      </div>
      <div className="background-images-3" style={{ height, bottom: height }} />
    </div>
  )
}

export default SendMessages;
