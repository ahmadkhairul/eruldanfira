import { useEffect, useState } from 'react';
import axios from 'axios';
import Add from './add';
import List from './list';
// import db from '../../lib/firebase';

function Component() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const { data: { entriesData } } = await axios.get('/api/message/message');
    setData(entriesData)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Add fetchData={fetchData} />
      {loading ? 'sedang memuat ...' : <List entriesData={data} />}
    </div>
  )
}

// export const getStaticProps = async () => {
//   const entries = await db.collection('messages').orderBy('created', 'desc').get();
//   const entriesData = entries.docs.map(entry => ({
//     id: entry.id,
//     ...entry.data()
//   }));
//   return {
//     props: { entriesData },
//     revalidate: 10
//   }
// }

export default Component;