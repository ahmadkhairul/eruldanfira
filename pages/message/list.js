import { useEffect, useState } from 'react';
import axios from 'axios';

const GetMessages = (props) => {
  const { entriesData } = props;

  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // const fetchData = async () => {
  //   const { data: { entriesData } }= await axios.get('/api/message/message');
  //   setData(entriesData)
  //   setLoading(false)
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  let view = 'empty data';
  // if (loading) view = 'loading';
  // if (entriesData.length > 0 && !loading) {
  if (entriesData.length > 0) {
    view = entriesData?.map((i, item) => (
      <div key={item}>
        <p>{i.message}</p>
        <p>{i.name}</p>
      </div>
    ))
  }

  return (
    <div>
      <h1>Doa dan Ucapan</h1>
      {view}
    </div>
  );
};

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

export default GetMessages;
