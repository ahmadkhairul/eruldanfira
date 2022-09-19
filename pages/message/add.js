import { useState } from 'react';
import { motion } from "framer-motion";
import axios from 'axios';
import Animated from '../../Components/animated';

function SendMessages(props) {
  const { fetchData } = props;
  const [nama, setNama] = useState('');
  const [pesan, setPesan] = useState('');
  const [presence, setPresence] = useState('');

  const handleSubmit = async () => {
    const body = {
      name: nama,
      message: pesan,
      presence,
    }
    await axios.post('/api/message', body);
    fetchData()
  }

  return (
    <div className="message">
      <Animated className="heading-title">
        Doa dan Ucapan
      </Animated>
      <Animated className="form-container">
        <label htmlFor="nama">NAMA :</label>
        <input
          name='nama'
          type='text'
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
      </Animated>
      <Animated className="form-container">
        <label htmlFor="pesan">PESAN UNTUK MEMPELAI :</label>
        <textarea
          name='pesan'
          type='text'
          onChange={(e) => setPesan(e.target.value)}
          defaultValue={pesan}
        />
      </Animated>
      <Animated className="form-container">
        <label htmlFor='presence'>KONFIRMASI KEHADIRAN :</label>
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
    </div>
  )
}

export default SendMessages;
