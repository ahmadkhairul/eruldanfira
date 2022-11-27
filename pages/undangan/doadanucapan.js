import { useState } from 'react';
import axios from 'axios';
import Animated from '../../Components/animated';

function SendMessages(props) {
  const { fetchData } = props;
  const [nama, setNama] = useState('');
  const [pesan, setPesan] = useState('');
  const [presence, setPresence] = useState('');
  const [message, setMessage] = useState('');

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

  return (
    <div className="container message">
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
          <option value={true}>Hadir</option>
          <option value={false}>Tidak Hadir</option>
        </select>
      </Animated>
      <Animated className="form-container">
        <button onClick={handleSubmit}>
          Kirim
        </button>
      </Animated>
      <Animated className="form-container">
        <p style={{ height: '20px' }}>{message}</p>
      </Animated>
    </div>
  )
}

export default SendMessages;
