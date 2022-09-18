const GetMessages = (props) => {
  const { entriesData } = props;

  let view = 'empty data';
  if (entriesData && entriesData.length > 0) {
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

export default GetMessages;
