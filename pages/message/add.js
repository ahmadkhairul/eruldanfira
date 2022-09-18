import { useState } from 'react';
import axios from 'axios';

function SendMessages(props) {
  const { fetchData } = props;
  const [nama, setNama] = useState('');
  const [pesan, setPesan] = useState('');
  const [presence, setPresence] = useState('');

  const handleSubmit = async () => {
    const body = {
      name: nama,
      message: pesan,
      presence: presence ? true : false
    }
    await axios.post('/api/message', body);
    fetchData()
  }

  return (
    <div>
      nama :
      <input
        type='text'
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />
      <br />
      pesan :
      <input
        type='text'
        value={pesan}
        onChange={(e) => setPesan(e.target.value)} />
      <br />
      konfirmasi kehadiran :
      <input
        type='text'
        value={presence}
        onChange={(e) => setPresence(e.target.value)} />
      <br />
      <button onClick={handleSubmit}>
        Kirim
      </button>
    </div>
  )
}

export default SendMessages;
