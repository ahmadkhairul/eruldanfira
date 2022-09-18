import db from '../../../lib/firebase';

export default async (req, res) => {
  try {
    const { name } = req.body;
    const entries = await db.collection('messages').get();
    const entriesData = entries.docs.map(entry => entry.data());

    if (entriesData.some(entry => entry.name === name)) {
      res.status(400).end();
    } else {
      const { id } = await db.collection('messages').add({
        ...req.body,
        created: new Date().toISOString(),
      });
      res.status(200).json({ id });
    }
  } catch (e) {
    res.status(400).end();
  }
}