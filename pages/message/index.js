import { useEffect, useState } from 'react';
import axios from 'axios';
import Add from './add';
import List from './list';
import Animated from '../../Components/animated';

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
    <main>
      <section>
        <Add fetchData={fetchData} />
        {loading
          ? <Animated className="guest">sedang memuat ...'</Animated>
          : <List entriesData={data} />
        }
      </section>
    </main>
  )
}

export default Component;