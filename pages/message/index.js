import Add from './add';
import List from './list';
import db from '../../lib/firebase';

function Component(props) {
  const { entriesData } = props
  return (
    <div>
      <Add />
      <List entriesData={entriesData} />
    </div>
  )
}

export const getStaticProps = async () => {
  const entries = await db.collection('messages').orderBy('created', 'desc').get();
  const entriesData = entries.docs.map(entry => ({
    id: entry.id,
    ...entry.data()
  }));
  return {
    props: { entriesData },
    revalidate: 10
  }
}

export default Component;