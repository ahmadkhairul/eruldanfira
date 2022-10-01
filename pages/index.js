import Link from 'next/link';
import { useState } from 'react';

const Component = () => {
  const [nama, setNama] = useState('');

  const uncapitalizeAddStrip = (str) => {
    if (!str) return 'tamu-undangan';
    let string = str.replace(/ /g, '-');
    return string.toLowerCase();
  }

  return (
    <div className="rootpage">
      <div>
        <div className="heading-title">
          Masukan nama anda:
        </div>
        <div className="form-container">
          <label htmlFor="nama">NAMA :</label>
          <input
            name='nama'
            type='text'
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>
        <div className="form-container">
          <Link href={`/guest/${uncapitalizeAddStrip(nama)}`}>
            <button>Cari Undangan</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Component;