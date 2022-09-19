import Animated from '../../Components/animated';

const GetMessages = (props) => {
  const { entriesData } = props;

  let view = 'empty data';
  if (entriesData && entriesData.length > 0) {
    view = entriesData?.map((i, item) => (
      <Animated className="guestmessagecontainer" key={item}>
        <p>{i.message}</p>
        <p>{i.name}</p>
      </Animated>
    ))
  }

  return (
    <div className="guest">
      <Animated className="heading-title">
        Doa dan Ucapan
      </Animated>
      <Animated className="heading-subtitle">
        dari undangan
      </Animated>
      {view}
    </div>
  );
};

export default GetMessages;
