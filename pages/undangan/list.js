import Animated from '../../Components/animated';

const GetMessages = (props) => {
  const { entriesData } = props;

  if (entriesData) {
    return entriesData.map((i, item) => (
      <Animated className="guestmessagecontainer" key={item}>
        <p>{i.message}</p>
        <p>{i.name}</p>
      </Animated>
    ))
  } else {
    return <Animated>belum ada pesan ...'</Animated>;
  }
};

export default GetMessages;
