import Animated from '../../Components/animated';
import Slider from "../../Components/slider";
import {
  BsXCircleFill,
  BsFillCheckCircleFill
} from "react-icons/bs";
import getMessageDate from '../../Components/getmessagedate';

const GetMessages = (props) => {
  const { entriesData } = props;

  if (entriesData) {
    return (
      <Slider className='guestmessagecontainer'>
        {entriesData.map((i, b) => (
          <div key={b}>
            {i.map((n, m) => (
              <span key={m}>
                <p className='avatarcontainer'>
                  {n.name} &nbsp;
                  {n.presence === "hadir"
                    ? <BsFillCheckCircleFill color="#3d9a62" size="16px" />
                    : <BsXCircleFill color="#d90a11" size="16px" />}
                </p>
                <p>{n.message}</p>
                <p>{getMessageDate(n.created)}</p>
              </span>
            ))}
          </div>
        ))}
      </Slider>
    )
  } else {
    return <Animated>belum ada pesan ...'</Animated>;
  }
};

export default GetMessages;
