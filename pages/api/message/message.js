import db from '../../../lib/firebase';

export default async (req, res) => {
  try {
    const entries = await db.collection('messages-new').orderBy('created', 'desc').get();
    const data = entries.docs.map(entry => ({
      id: entry.id,
      ...entry.data()
    }));

    const entriesData = [];
    while (data.length) entriesData.push(data.splice(0, 3));

    res.status(200).json({ entriesData });
  } catch (e) {
    res.status(400).end();
  }
}