import Animated from '../../Components/animated';

const GetMessages = (props) => {
  const { entriesData } = props;

  if (entriesData) {
    return (
      <div style={{ maxHeight: '75vh', height: '100%', overflowY: 'auto', marginTop: '10px' }}>
        {entriesData.map((i, item) => (
          <Animated className="guestmessagecontainer" key={item}>
            <p>{i.message}</p>
            <p>{i.name}</p>
          </Animated>
        ))}
      </div>
    )
  } else {
    return <Animated>belum ada pesan ...'</Animated>;
  }
};

export default GetMessages;
